package wym.rentcar.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AgencyRequest {

    @NotBlank(message = "Agency name is required")
    private String name;

    @Email(message = "Invalid contact email")
    private String contactEmail;

    private String contactPhone;

    private String city;

    private String description;
}
