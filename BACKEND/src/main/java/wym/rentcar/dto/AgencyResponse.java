package wym.rentcar.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import wym.rentcar.entity.Agency;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AgencyResponse {

    private Long id;
    private String name;
    private String logo;
    private String contactEmail;
    private String contactPhone;
    private String city;
    private String description;
    private LocalDateTime createdAt;

    public static AgencyResponse fromEntity(Agency agency) {
        return AgencyResponse.builder()
                .id(agency.getId())
                .name(agency.getName())
                .logo(agency.getLogo())
                .contactEmail(agency.getContactEmail())
                .contactPhone(agency.getContactPhone())
                .city(agency.getCity())
                .description(agency.getDescription())
                .createdAt(agency.getCreatedAt())
                .build();
    }
}
