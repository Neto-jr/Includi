
package includi_api.service;

import includi_api.model.StatusVaga;
import includi_api.model.TipoUsuario;
import includi_api.model.Usuario;
import includi_api.model.Vaga;
import includi_api.repository.UsuarioRepository;
import includi_api.repository.VagaRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class VagaService {

    private final VagaRepository vagaRepository;
    private final UsuarioRepository usuarioRepository;

    public VagaService(
            VagaRepository vagaRepository,
            UsuarioRepository usuarioRepository) {
        this.vagaRepository = vagaRepository;
        this.usuarioRepository = usuarioRepository;
    }

    @Transactional
    public Vaga cadastrar(Vaga vaga) {
        vaga.setId(null);

        Usuario contratante = buscarContratante(
                obterIdContratante(vaga)
        );

        vaga.setContratante(contratante);

        if (vaga.getStatus() == null) {
            vaga.setStatus(StatusVaga.ABERTA);
        }

        return vagaRepository.save(vaga);
    }

    @Transactional(readOnly = true)
    public List<Vaga> listarTodas() {
        return vagaRepository.findAll();
    }

    @Transactional(readOnly = true)
    public Vaga buscarPorId(Long id) {
        return vagaRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND,
                        "Vaga não encontrada"
                ));
    }

    @Transactional
    public Vaga atualizar(Long id, Vaga dados) {
        Vaga vaga = buscarPorId(id);

        vaga.setTitulo(dados.getTitulo());
        vaga.setDescricao(dados.getDescricao());
        vaga.setRemuneracao(dados.getRemuneracao());

        if (dados.getStatus() != null) {
            vaga.setStatus(dados.getStatus());
        }

        Usuario contratante = buscarContratante(
                obterIdContratante(dados)
        );

        vaga.setContratante(contratante);

        return vagaRepository.save(vaga);
    }

    @Transactional
    public void excluir(Long id) {
        Vaga vaga = buscarPorId(id);
        vagaRepository.delete(vaga);
    }

    private Long obterIdContratante(Vaga vaga) {
        if (vaga.getContratante() == null
                || vaga.getContratante().getId() == null) {
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST,
                    "Informe o ID do contratante"
            );
        }

        return vaga.getContratante().getId();
    }

    private Usuario buscarContratante(Long id) {
        Usuario usuario = usuarioRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.BAD_REQUEST,
                        "Contratante não encontrado"
                ));

        if (usuario.getTipoUsuario() != TipoUsuario.CONTRATANTE) {
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST,
                    "O usuário informado não é um contratante"
            );
        }

        return usuario;
    }
}
