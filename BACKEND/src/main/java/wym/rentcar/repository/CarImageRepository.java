package wym.rentcar.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import wym.rentcar.entity.CarImage;

import java.util.List;

public interface CarImageRepository extends JpaRepository<CarImage, Long> {
    List<CarImage> findByCarIdOrderByPositionAsc(Long carId);
}
