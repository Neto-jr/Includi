
package includi_api.service;

import includi_api.model.Usuario;
import includi_api.repository.UsuarioRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class UsuarioService {

    private final UsuarioRepository repository;

    public UsuarioService(UsuarioRepository repository) {
        this.repository = repository;
    }

    public Usuario cadastrar(Usuario usuario) {
        usuario.setId(null);
        return repository.save(usuario);
    }

    public List<Usuario> listarTodos() {
        return repository.findAll();
    }

    public Usuario buscarPorId(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND,
                        "Usuário não encontrado"
                ));
    }

    public Usuario atualizar(Long id, Usuario dados) {
        Usuario usuario = buscarPorId(id);

        usuario.setNome(dados.getNome());
        usuario.setEmail(dados.getEmail());
        usuario.setTelefone(dados.getTelefone());
        usuario.setTipoUsuario(dados.getTipoUsuario());

        return repository.save(usuario);
    }

    public void excluir(Long id) {
        Usuario usuario = buscarPorId(id);
        repository.delete(usuario);
    }
}
