package wym.rentcar.dto;

import jakarta.validation.constraints.*;
import lombok.Getter;
import lombok.Setter;
import wym.rentcar.entity.FuelType;
import wym.rentcar.entity.GearboxType;

import java.math.BigDecimal;

@Getter
@Setter
public class CarRequest {

    @NotBlank(message = "Brand is required")
    private String brand;

    @NotBlank(message = "Model is required")
    private String model;

    @NotNull(message = "Year is required")
    @Min(value = 1980, message = "Year must be realistic")
    private Integer year;

    @NotNull(message = "Fuel type is required")
    private FuelType fuel;

    @NotNull(message = "Gearbox type is required")
    private GearboxType gearbox;

    @NotNull(message = "Seats is required")
    @Min(value = 1, message = "Seats must be at least 1")
    private Integer seats;

    @NotNull(message = "Price is required")
    @DecimalMin(value = "0.0", inclusive = false, message = "Price must be positive")
    private BigDecimal price;
}
