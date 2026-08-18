package wym.rentcar.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import wym.rentcar.entity.Car;
import wym.rentcar.entity.FuelType;
import wym.rentcar.entity.GearboxType;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CarResponse {

    private Long id;
    private Long agencyId;
    private String brand;
    private String model;
    private Integer year;
    private FuelType fuel;
    private GearboxType gearbox;
    private Integer seats;
    private BigDecimal price;
    private Boolean available;
    private List<String> images;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    public static CarResponse fromEntity(Car car) {
        return CarResponse.builder()
                .id(car.getId())
                .agencyId(car.getAgency().getId())
                .brand(car.getBrand())
                .model(car.getModel())
                .year(car.getYear())
                .fuel(car.getFuel())
                .gearbox(car.getGearbox())
                .seats(car.getSeats())
                .price(car.getPrice())
                .available(car.getAvailable())
                .images(car.getImages().stream()
                        .map(img -> img.getUrl())
                        .collect(Collectors.toList()))
                .createdAt(car.getCreatedAt())
                .updatedAt(car.getUpdatedAt())
                .build();
    }
}
