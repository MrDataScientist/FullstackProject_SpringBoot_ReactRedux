

package io.hse24.demo.services;

        import io.hse24.demo.domain.Capacity;
        import io.hse24.demo.exceptions.CapacityException;
        import io.hse24.demo.repositories.CapacityRepository;

        import org.springframework.http.HttpStatus;
        import org.springframework.http.ResponseEntity;
        import org.springframework.stereotype.Service;
        import org.springframework.validation.BindingResult;
        import org.springframework.validation.FieldError;

        import java.util.HashMap;
        import java.util.List;

@Service
public class CapacityService {

    private CapacityRepository capacityRepository;

    public CapacityService(CapacityRepository capacityRepository) {
        this.capacityRepository = capacityRepository;
    }

    public List<Capacity> getAllCapacities(){
        return capacityRepository.findAll();
    }

    public Capacity findCapById(Long id){

        return capacityRepository.findById(id).
                orElseThrow(()-> new CapacityException("Capacity with ID: "+id+" Not found"));

    }

    public Capacity saveCapacity(Capacity capacity){
        //
        return capacityRepository.save(capacity);
    }

    public ResponseEntity<?> errorMap(BindingResult result){

        var errorM = new HashMap<>();

        for(FieldError error: result.getFieldErrors()){
            errorM.put(error.getField(),error.getDefaultMessage());
        }

        return new ResponseEntity<>(errorM, HttpStatus.BAD_REQUEST);

    }

    public Capacity updateCapacity(Long id, Capacity capacity){

        return capacityRepository.findById(id).map(
                cap -> {
                    cap.setTechStack(capacity.getTechStack());
                    cap.setNumOfDevelopers(capacity.getNumOfDevelopers());
                    cap.setNumOfAvailableDevelopers(capacity.getNumOfAvailableDevelopers());
                    return capacityRepository.save(cap);
                }).orElseGet(()-> {
            return capacityRepository.save(capacity);
        });
    }

    public void deleteCapacity(Long id){

        capacityRepository.delete(
                capacityRepository.findById(id)
                        .orElseThrow(() -> new CapacityException("Capacity with ID: "+id+" Not found")
                        ));
    }


}
