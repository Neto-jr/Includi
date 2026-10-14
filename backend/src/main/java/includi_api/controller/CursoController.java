
package includi_api.controller;

import includi_api.model.Curso;
import includi_api.service.CursoService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cursos")
public class CursoController {

    private final CursoService service;

    public CursoController(CursoService service) {
        this.service = service;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Curso cadastrar(@Valid @RequestBody Curso curso) {
        return service.cadastrar(curso);
    }

    @GetMapping
    public List<Curso> listarTodos() {
        return service.listarTodos();
    }

    @GetMapping("/{id}")
    public Curso buscarPorId(@PathVariable Long id) {
        return service.buscarPorId(id);
    }

    @PutMapping("/{id}")
    public Curso atualizar(
            @PathVariable Long id,
            @Valid @RequestBody Curso curso) {
        return service.atualizar(id, curso);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void excluir(@PathVariable Long id) {
        service.excluir(id);
    }
}
