package wym.rentcar.controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import wym.rentcar.dto.CarRequest;
import wym.rentcar.dto.CarResponse;
import wym.rentcar.entity.User;
import wym.rentcar.service.CarService;

import java.util.List;

@RestController
@RequestMapping("/api/cars")
@RequiredArgsConstructor
public class CarController {

    private final CarService carService;

    @GetMapping
    public ResponseEntity<List<CarResponse>> getAllAvailableCars() {
        return ResponseEntity.ok(carService.getAllAvailable());
    }

    @GetMapping("/{carId}")
    public ResponseEntity<CarResponse> getCar(@PathVariable Long carId) {
        return ResponseEntity.ok(carService.getById(carId));
    }

    @GetMapping("/agency/{agencyId}")
    public ResponseEntity<List<CarResponse>> getCarsByAgency(@PathVariable Long agencyId) {
        return ResponseEntity.ok(carService.getByAgency(agencyId));
    }

    @PostMapping
    public ResponseEntity<CarResponse> addCar(
            @AuthenticationPrincipal User user,
            @Valid @RequestBody CarRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(carService.addCar(user.getId(), request));
    }

    @PutMapping("/{carId}")
    public ResponseEntity<CarResponse> updateCar(
            @AuthenticationPrincipal User user,
            @PathVariable Long carId,
            @Valid @RequestBody CarRequest request) {
        return ResponseEntity.ok(carService.updateCar(user.getId(), carId, request));
    }

    @DeleteMapping("/{carId}")
    public ResponseEntity<Void> deleteCar(
            @AuthenticationPrincipal User user,
            @PathVariable Long carId) {
        carService.deleteCar(user.getId(), carId);
        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/{carId}/availability")
    public ResponseEntity<CarResponse> toggleAvailability(
            @AuthenticationPrincipal User user,
            @PathVariable Long carId) {
        return ResponseEntity.ok(carService.toggleAvailability(user.getId(), carId));
    }

    @PostMapping(value = "/{carId}/images", consumes = "multipart/form-data")
    public ResponseEntity<CarResponse> uploadImages(
            @AuthenticationPrincipal User user,
            @PathVariable Long carId,
            @RequestParam("files") List<MultipartFile> files) {
        return ResponseEntity.ok(carService.uploadImages(user.getId(), carId, files));
    }

    @DeleteMapping("/{carId}/images/{imageId}")
    public ResponseEntity<Void> deleteImage(
            @AuthenticationPrincipal User user,
            @PathVariable Long carId,
            @PathVariable Long imageId) {
        carService.deleteImage(user.getId(), carId, imageId);
        return ResponseEntity.noContent().build();
    }
}
