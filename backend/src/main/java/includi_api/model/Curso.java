
package includi_api.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "cursos")
public class Curso {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "O título é obrigatório")
    @Size(max = 150)
    @Column(nullable = false, length = 150)
    private String titulo;

    @NotBlank(message = "A descrição é obrigatória")
    @Column(nullable = false, columnDefinition = "TEXT")
    private String descricao;

    @NotNull(message = "A carga horária é obrigatória")
    @Min(value = 1, message = "A carga horária deve ser maior que zero")
    @Column(name = "carga_horaria", nullable = false)
    private Integer cargaHoraria;

    @Size(max = 500)
    @Column(name = "url_conteudo", length = 500)
    private String urlConteudo;

    public Curso() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Integer getCargaHoraria() {
        return cargaHoraria;
    }

    public void setCargaHoraria(Integer cargaHoraria) {
        this.cargaHoraria = cargaHoraria;
    }

    public String getUrlConteudo() {
        return urlConteudo;
    }

    public void setUrlConteudo(String urlConteudo) {
        this.urlConteudo = urlConteudo;
    }
}
