
package includi_api.repository;

import includi_api.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository
        extends JpaRepository<Usuario, Long> {
}
