
package includi_api.service;

import includi_api.model.Curso;
import includi_api.repository.CursoRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class CursoService {

    private final CursoRepository repository;

    public CursoService(CursoRepository repository) {
        this.repository = repository;
    }

    @Transactional
    public Curso cadastrar(Curso curso) {
        curso.setId(null);
        return repository.save(curso);
    }

    @Transactional(readOnly = true)
    public List<Curso> listarTodos() {
        return repository.findAll();
    }

    @Transactional(readOnly = true)
    public Curso buscarPorId(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND,
                        "Curso não encontrado"
                ));
    }

    @Transactional
    public Curso atualizar(Long id, Curso dados) {
        Curso curso = buscarPorId(id);

        curso.setTitulo(dados.getTitulo());
        curso.setDescricao(dados.getDescricao());
        curso.setCargaHoraria(dados.getCargaHoraria());
        curso.setUrlConteudo(dados.getUrlConteudo());

        return repository.save(curso);
    }

    @Transactional
    public void excluir(Long id) {
        Curso curso = buscarPorId(id);
        repository.delete(curso);
    }
}
