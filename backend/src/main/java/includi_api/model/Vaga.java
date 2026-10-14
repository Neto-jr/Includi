
package includi_api.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.math.BigDecimal;

@Entity
@Table(name = "vagas")
public class Vaga {

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

    @NotNull(message = "A remuneração é obrigatória")
    @DecimalMin(value = "0.0", inclusive = false,
            message = "A remuneração deve ser maior que zero")
    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal remuneracao;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 20)
    private StatusVaga status = StatusVaga.ABERTA;

    @NotNull(message = "Informe o contratante")
    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "contratante_id", nullable = false)
    private Usuario contratante;

    public Vaga() {
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

    public BigDecimal getRemuneracao() {
        return remuneracao;
    }

    public void setRemuneracao(BigDecimal remuneracao) {
        this.remuneracao = remuneracao;
    }

    public StatusVaga getStatus() {
        return status;
    }

    public void setStatus(StatusVaga status) {
        this.status = status;
    }

    public Usuario getContratante() {
        return contratante;
    }

    public void setContratante(Usuario contratante) {
        this.contratante = contratante;
    }
}
