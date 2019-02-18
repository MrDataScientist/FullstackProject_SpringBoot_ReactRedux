

package io.hse24.demo.repositories;

        import io.hse24.demo.domain.Capacity;
        import org.springframework.data.jpa.repository.JpaRepository;

public interface CapacityRepository extends JpaRepository<Capacity, Long> {
}
