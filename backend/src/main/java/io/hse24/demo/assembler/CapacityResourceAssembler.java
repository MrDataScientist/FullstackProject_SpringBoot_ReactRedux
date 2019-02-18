

package io.hse24.demo.assembler;

        import io.hse24.demo.domain.Capacity;
        import io.hse24.demo.resources.CapacityController;
        import org.springframework.hateoas.Link;
        import org.springframework.hateoas.Resource;
        import org.springframework.hateoas.ResourceAssembler;
        import org.springframework.stereotype.Component;

        import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;
        import static org.springframework.hateoas.mvc.ControllerLinkBuilder.methodOn;

@Component
public class CapacityResourceAssembler implements ResourceAssembler<Capacity, Resource<Capacity>> {

    @Override
    public Resource<Capacity> toResource(Capacity entity) {
        return new Resource<>(entity,
                linkTo(methodOn(CapacityController.class).getCapacity(entity.getId())).withRel("getThisCapacity"),
                linkTo(methodOn(CapacityController.class).deleteCapacity(entity.getId())).withRel("deleteThisCapacity"),
                linkTo(methodOn(CapacityController.class).getAllCapacities()).withRel("getAllCapacities"),
                new Link("http://localhost:8080/dashboard/"+entity.getId()).withRel("updateThisCapacity")
        );
    }
}
