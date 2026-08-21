package wym.rentcar.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import wym.rentcar.entity.Car;

import java.util.List;

public interface CarRepository extends JpaRepository<Car, Long> {
    List<Car> findByAgencyId(Long agencyId);
    List<Car> findByAvailableTrue();
}
