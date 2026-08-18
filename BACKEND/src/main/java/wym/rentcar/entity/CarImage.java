package wym.rentcar.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "car_images")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CarImage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "car_id", nullable = false)
    private Car car;

    @Column(nullable = false, length = 1000)
    private String url; // Cloudinary secure_url

    @Column(name = "public_id", nullable = false)
    private String publicId; // Cloudinary public_id, needed to delete later

    @Column(name = "position")
    private Integer position; // ordering in gallery
}
