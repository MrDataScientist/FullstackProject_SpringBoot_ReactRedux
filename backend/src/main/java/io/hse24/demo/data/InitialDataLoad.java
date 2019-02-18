
package io.hse24.demo.data;

        import io.hse24.demo.domain.Capacity;
        import io.hse24.demo.repositories.CapacityRepository;
        import org.springframework.boot.CommandLineRunner;
        import org.springframework.context.annotation.Bean;
        import org.springframework.context.annotation.Configuration;

@Configuration
public class InitialDataLoad {

    @Bean
    CommandLineRunner LoadDB (CapacityRepository capacityRepository){
        return args -> { //lambda expression
            capacityRepository.save(new Capacity("Java", 100, 50));
            capacityRepository.save(new Capacity("ReactJS",70,20));
            capacityRepository.save(new Capacity("Python", 200, 100));
        };
    }
}

