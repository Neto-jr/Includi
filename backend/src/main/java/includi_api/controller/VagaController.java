
package includi_api.controller;

import includi_api.model.Vaga;
import includi_api.service.VagaService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/vagas")
public class VagaController {

    private final VagaService service;

    public VagaController(VagaService service) {
        this.service = service;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Vaga cadastrar(@Valid @RequestBody Vaga vaga) {
        return service.cadastrar(vaga);
    }

    @GetMapping
    public List<Vaga> listarTodas() {
        return service.listarTodas();
    }

    @GetMapping("/{id}")
    public Vaga buscarPorId(@PathVariable Long id) {
        return service.buscarPorId(id);
    }

    @PutMapping("/{id}")
    public Vaga atualizar(
            @PathVariable Long id,
            @Valid @RequestBody Vaga vaga) {
        return service.atualizar(id, vaga);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void excluir(@PathVariable Long id) {
        service.excluir(id);
    }
}
