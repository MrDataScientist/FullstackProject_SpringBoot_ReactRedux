

package io.hse24.demo.resources;

import io.hse24.demo.assembler.CapacityResourceAssembler;
import io.hse24.demo.domain.Capacity;
import io.hse24.demo.services.CapacityService;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.Resource;
import org.springframework.hateoas.Resources;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.stream.Collectors;


@RestController
@RequestMapping("/dashboard")
@CrossOrigin
public class CapacityController {

    private CapacityService capacityService;

    private CapacityResourceAssembler assembler;

    public CapacityController(CapacityService capacityService, CapacityResourceAssembler assembler) {
        this.capacityService = capacityService;
        this.assembler = assembler;
    }

    @GetMapping
    public Resources<Resource<Capacity>> getAllCapacities(){

        return new Resources<>(capacityService.getAllCapacities().stream()
                .map(capacity -> assembler.toResource(capacity)).collect(Collectors.toList()),
                new Link("http://localhost:8080/dashboard").withRel("createCapacity")
        );
    }

    @GetMapping("/{id}")
    public Resource<?> getCapacity(@PathVariable Long id){

        return new Resource<>(assembler.toResource(capacityService.findCapById(id)));
    }

    @PostMapping
    public Object createCapacity(@Valid @RequestBody Capacity capacity, BindingResult result){

        if(result.hasErrors()) return capacityService.errorMap(result);

        return new Resource<>(assembler.toResource(capacityService.saveCapacity(capacity)));

    }

    @PutMapping("/{id}")
    public Object updateCapacity(@PathVariable Long id, @Valid @RequestBody Capacity capacity, BindingResult result){

        if(result.hasErrors()) return capacityService.errorMap(result);

        return new Resource<>(assembler.toResource(capacityService.updateCapacity(id,capacity)));
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCapacity(@PathVariable Long id){

        capacityService.deleteCapacity(id);

        return new ResponseEntity<String>("Capacity Deleted", HttpStatus.OK);
    }

}
