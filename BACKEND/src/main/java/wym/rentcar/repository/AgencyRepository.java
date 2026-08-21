package wym.rentcar.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import wym.rentcar.entity.Agency;

import java.util.Optional;

public interface AgencyRepository extends JpaRepository<Agency, Long> {
    Optional<Agency> findByOwnerId(Long ownerId);
    boolean existsByOwnerId(Long ownerId);
}
