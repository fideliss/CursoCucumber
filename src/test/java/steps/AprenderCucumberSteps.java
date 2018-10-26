package steps;

import java.util.Date;

public class AprenderCucumberSteps {

    private int contador = 0;
    private Date entrega = new Date();

    /*@Dado("^que criei o arquivo corretamente$")
    public void queCrieiOArquivoCorretamente() throws Throwable {
    }

    @Quando("^executá-lo$")
    public void executáLo() throws Throwable {
    }

    @Então("^a especificação deve finalizar com sucesso$")
    public void aEspecificaçãoDeveFinalizarComSucesso() throws Throwable {
    }

    @Dado("^que o valor do contador é (\\d+)$")
    public void queOValorDoContadorÉ(int arg1) throws Throwable {
        contador = arg1;
    }

    @Quando("^eu incrementar em (\\d+)$")
    public void euIncrementarEm(int arg1) throws Throwable {
        contador += arg1;
    }

    @Então("^o valor do contador será (\\d+)$")
    public void oValorDoContadorSerá(int arg1) throws Throwable {
        Assert.assertEquals(arg1, contador);
    }

    @Dado("^que o prazo é dia (.*)$")
    public void queOPrazoÉDia(@Transform(DateConverter.class) Date data) throws Throwable {
        entrega = data;
        System.out.println(entrega);
    }

    @Quando("^a entrega atrasar em (\\d+) (dia|dias|mes|meses)$")
    public void aEntregaAtrasarEmDias(int arg1, String tempo) throws Throwable {
        Calendar cal = Calendar.getInstance();
        cal.setTime(entrega);

        if (tempo.equals("dias")) {
            cal.add(Calendar.DAY_OF_MONTH, arg1);
        } else if (tempo.equals("meses")) {
            cal.add(Calendar.MONTH, arg1);
        }

        entrega = cal.getTime();
    }

    @Então("^a entrega será efetuada em (\\d{2}/\\d{2}/\\d{4})$")
    public void aEntregaSeráEfetuadaEm(String data) throws Throwable {
        DateFormat format = new SimpleDateFormat("dd/MM/yyyy");
        String dataFormatada = format.format(entrega);
        Assert.assertEquals(data, dataFormatada);
    }

    *//* DESAFIO *//*

    @Dado("^que o ticket( especial)? é (A.\\d{3})$")
    public void queOTicketÉAF(String tipo, String arg1) throws Throwable {

    }

    @Dado("^que o valor da passagem é R\\$ (.*)$")
    public void queOValorDaPassagemÉR$(Double numero) throws Throwable {
        System.out.println(numero);
    }

    @Dado("^que o nome do passageiro é \"(.{5,20})\"$")
    public void queONomeDoPassageiroÉ(String arg1) throws Throwable {

    }

    @Dado("^que o telefone do passageiro é (9\\d{3}-\\d{4})$")
    public void queOTelefoneDoPassageiroÉ(String telefone) throws Throwable {

    }

    @Quando("^criar os steps$")
    public void criarOsSteps() throws Throwable {

    }

    @Então("^o teste vai funcionar$")
    public void oTesteVaiFuncionar() throws Throwable {

    }*/

}
