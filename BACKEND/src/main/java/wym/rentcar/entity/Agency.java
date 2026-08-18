package wym.rentcar.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import wym.rentcar.entity.User;

import java.time.LocalDateTime;

@Entity
@Table(name = "agencies")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Agency {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "owner_id", nullable = false, unique = true)
    private User owner;

    @Column(nullable = false)
    private String name;

    private String logo;

    @Column(name = "contact_email")
    private String contactEmail;

    @Column(name = "contact_phone")
    private String contactPhone;

    private String city;

    @Column(length = 2000)
    private String description;

    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @PrePersist
    protected void onCreate() {
        this.createdAt = LocalDateTime.now();
    }
}
