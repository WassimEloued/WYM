package wym.rentcar.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import wym.rentcar.dto.CarRequest;
import wym.rentcar.dto.CarResponse;
import wym.rentcar.entity.Agency;
import wym.rentcar.entity.Car;
import wym.rentcar.entity.CarImage;
import wym.rentcar.exception.ForbiddenActionException;
import wym.rentcar.exception.ResourceNotFoundException;
import wym.rentcar.repository.CarImageRepository;
import wym.rentcar.repository.CarRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CarService {

    private final CarRepository carRepository;
    private final CarImageRepository carImageRepository;
    private final AgencyService agencyService;
    private final CloudinaryService cloudinaryService;

    @Transactional
    public CarResponse addCar(Long ownerId, CarRequest request) {
        Agency agency = agencyService.getOwnedAgency(ownerId);

        Car car = Car.builder()
                .agency(agency)
                .brand(request.getBrand())
                .model(request.getModel())
                .year(request.getYear())
                .fuel(request.getFuel())
                .gearbox(request.getGearbox())
                .seats(request.getSeats())
                .price(request.getPrice())
                .available(true)
                .build();

        return CarResponse.fromEntity(carRepository.save(car));
    }

    @Transactional
    public CarResponse updateCar(Long ownerId, Long carId, CarRequest request) {
        Car car = getOwnedCar(ownerId, carId);
        car.setBrand(request.getBrand());
        car.setModel(request.getModel());
        car.setYear(request.getYear());
        car.setFuel(request.getFuel());
        car.setGearbox(request.getGearbox());
        car.setSeats(request.getSeats());
        car.setPrice(request.getPrice());
        return CarResponse.fromEntity(carRepository.save(car));
    }

    @Transactional
    public void deleteCar(Long ownerId, Long carId) {
        Car car = getOwnedCar(ownerId, carId);
        for (CarImage image : car.getImages()) {
            cloudinaryService.delete(image.getPublicId());
        }
        carRepository.delete(car);
    }

    @Transactional
    public CarResponse toggleAvailability(Long ownerId, Long carId) {
        Car car = getOwnedCar(ownerId, carId);
        car.setAvailable(!car.getAvailable());
        return CarResponse.fromEntity(carRepository.save(car));
    }

    @Transactional
    public CarResponse uploadImages(Long ownerId, Long carId, List<MultipartFile> files) {
        Car car = getOwnedCar(ownerId, carId);
        int startPosition = car.getImages().size();

        for (int i = 0; i < files.size(); i++) {
            CloudinaryService.UploadResult result = cloudinaryService.upload(files.get(i), "cars/" + carId);
            CarImage image = CarImage.builder()
                    .car(car)
                    .url(result.url())
                    .publicId(result.publicId())
                    .position(startPosition + i)
                    .build();
            car.getImages().add(image);
        }

        return CarResponse.fromEntity(carRepository.save(car));
    }

    @Transactional
    public void deleteImage(Long ownerId, Long carId, Long imageId) {
        Car car = getOwnedCar(ownerId, carId);
        CarImage image = car.getImages().stream()
                .filter(img -> img.getId().equals(imageId))
                .findFirst()
                .orElseThrow(() -> new ResourceNotFoundException("Image not found on this car"));

        cloudinaryService.delete(image.getPublicId());
        car.getImages().remove(image);
        carImageRepository.delete(image);
    }

    @Transactional(readOnly = true)
    public CarResponse getById(Long carId) {
        return CarResponse.fromEntity(findCarOrThrow(carId));
    }

    @Transactional(readOnly = true)
    public List<CarResponse> getAllAvailable() {
        return carRepository.findByAvailableTrue().stream()
                .map(CarResponse::fromEntity)
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public List<CarResponse> getByAgency(Long agencyId) {
        return carRepository.findByAgencyId(agencyId).stream()
                .map(CarResponse::fromEntity)
                .collect(Collectors.toList());
    }

    private Car findCarOrThrow(Long carId) {
        return carRepository.findById(carId)
                .orElseThrow(() -> new ResourceNotFoundException("Car not found"));
    }

    private Car getOwnedCar(Long ownerId, Long carId) {
        Car car = findCarOrThrow(carId);
        Agency agency = agencyService.getOwnedAgency(ownerId);
        if (!car.getAgency().getId().equals(agency.getId())) {
            throw new ForbiddenActionException("You do not own this car");
        }
        return car;
    }
}
