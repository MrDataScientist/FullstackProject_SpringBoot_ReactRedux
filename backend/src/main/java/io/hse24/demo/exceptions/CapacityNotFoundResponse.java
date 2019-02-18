
package io.hse24.demo.exceptions;

        import lombok.Getter;
        import lombok.Setter;

@Getter
@Setter
public class CapacityNotFoundResponse {

    private String capacityNotFound;

    public CapacityNotFoundResponse(String capacityNotFound) { this.capacityNotFound = capacityNotFound;}
}