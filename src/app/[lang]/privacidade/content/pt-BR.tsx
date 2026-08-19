import Link from "next/link";

import {
  Callout,
  ControllerIdentity,
  LegalPage,
  LI,
  P,
  Section,
  Table,
  Term,
  UL,
} from "@/components/legal";
import { CONTROLLER } from "@/lib/legal";

export const meta = {
  title: "Política de privacidade",
  description:
    "Quais dados o Viicus coleta, por que, o que fica visível para outras pessoas, por quanto tempo guardamos e como você exerce seus direitos.",
};

/**
 * Política de privacidade (pt-BR — o texto de referência; `en.tsx` e `es.tsx`
 * são traduções dele e devem mudar junto).
 *
 * O texto descreve o comportamento REAL do sistema. Três pontos foram
 * verificados no código e não devem ser reescritos de memória:
 *
 * - Nas ocorrências o autor aparece como "Um vizinho", nunca pelo nome. O nome
 *   de exibição só aparece nos comentários (`features/community/author-name`).
 * - A coordenada é arredondada para ~110 m quando quem lê não está autenticado
 *   (`services/serialize.ts` da API).
 * - As janelas de expiração são por categoria, de 12 h a 30 dias
 *   (`domain/lifetime.ts`).
 *
 * Não citamos fornecedor por nome nem tecnologia de segurança por nome: a lei
 * pede que se informe a finalidade e as categorias de destinatário, não o
 * contrato de infraestrutura. Nomear fornecedor cria um texto que envelhece a
 * cada troca de contrato, e detalhar mecanismo de segurança entrega mapa a
 * quem procura brecha.
 */
export default function Content() {
  return (
    <LegalPage
      title="Política de privacidade"
      intro="O Viicus é um aplicativo onde moradores registram problemas da região e acompanham o que acontece por perto. Isso só funciona com dois dados sensíveis: onde você está e o que você escreve. Esta página explica exatamente o que fazemos com eles."
    >
      <Section id="resumo" title="O essencial, em uma tela">
        <UL>
          <LI>
            <Term>Sua localização vai para o servidor</Term> toda vez que o
            aplicativo monta o feed, faz uma busca ou verifica avisos por perto.
            É como ele sabe o que é “perto de você”.
          </LI>
          <LI>
            <Term>Seu nome não aparece nos registros.</Term> Quem publica uma
            ocorrência aparece como “Um vizinho”, no mapa, no feed e na tela do
            registro. Seu nome de exibição só aparece nos comentários.
          </LI>
          <LI>
            <Term>O que você registra é público</Term> — o texto, as fotos, a
            categoria e a localização aparecem no mapa e no feed de quem está
            por perto.
          </LI>
          <LI>
            <Term>Não vendemos seus dados</Term>, não exibimos publicidade e não
            usamos suas informações para perfilamento comercial.
          </LI>
          <LI>
            <Term>Você pode excluir sua conta</Term> pelo próprio aplicativo ou
            por esta{" "}
            <Link className="text-primary underline underline-offset-4" href="/excluir-conta">
              página
            </Link>
            , sem precisar falar com ninguém.
          </LI>
        </UL>
      </Section>

      <Section id="controlador" title="Quem é responsável pelos seus dados">
        <P>
          Para os fins da Lei Geral de Proteção de Dados (Lei nº 13.709/2018), o
          controlador dos dados tratados no Viicus é:
        </P>
        <ControllerIdentity />
      </Section>

      <Section id="dados" title="Que dados coletamos">
        <P>
          Coletamos o mínimo que o aplicativo precisa para funcionar. Não há
          cadastro por rede social, não pedimos CPF, não pedimos documento e não
          pedimos telefone.
        </P>

        <Table
          head={["Dado", "Quando é coletado", "Por que"]}
          rows={[
            [
              "E-mail",
              "No cadastro",
              "É sua identidade de acesso e o canal para o código de verificação e avisos de segurança da conta.",
            ],
            [
              "Nome de exibição",
              "No cadastro",
              "Identifica você nos comentários. Você escolhe — não precisa ser seu nome civil.",
            ],
            [
              "Senha",
              "No cadastro",
              "Guardada de forma criptografada. Não temos como ler sua senha.",
            ],
            [
              "Localização precisa",
              "Enquanto o aplicativo está em uso",
              "Montar o feed por proximidade, buscar por perto, avisar sobre alertas na sua área e posicionar o registro que você publica.",
            ],
            [
              "Fotos e vídeos",
              "Quando você anexa a um registro",
              "Mostrar o problema. Passam por análise automática antes de publicar.",
            ],
            [
              "Texto, categoria e endereço do registro",
              "Quando você publica",
              "É o conteúdo do registro, e o que é encaminhado ao órgão responsável.",
            ],
            [
              "Comentários, confirmações e reações",
              "Quando você interage",
              "Confirmar registros e conversar sobre eles.",
            ],
            [
              "Denúncias de conteúdo e bloqueios",
              "Quando você usa essas ações",
              "Moderação e sua capacidade de não ver alguém.",
            ],
            [
              "Plataforma e token de notificação",
              "Se você autorizar notificações",
              "Entregar avisos importantes ao seu aparelho.",
            ],
            [
              "Endereço IP e registros de acesso",
              "A cada requisição",
              "Segurança: limitar tentativas de cadastro, conter abuso e cumprir a guarda de registros exigida pelo Marco Civil da Internet.",
            ],
          ]}
        />

        <P>
          <Term>Não coletamos</Term> sua agenda de contatos, seu histórico de
          navegação, identificadores de publicidade, nem sua localização em
          segundo plano — quando o aplicativo está fechado, ele não sabe onde
          você está.
        </P>

        <P>
          O editor de registros do aplicativo <Term>bloqueia</Term> a publicação
          de CPF, telefone e e-mail dentro do texto, e avisa quando o relato
          parece apontar uma pessoa específica. Ainda assim, o que você escreve
          é de sua responsabilidade: não inclua dados de terceiros.
        </P>
      </Section>

      <Section id="finalidades" title="Para que usamos, e com que base legal">
        <Table
          head={["Finalidade", "Base legal (LGPD, art. 7º)"]}
          rows={[
            [
              "Criar e manter sua conta, autenticar seu acesso e permitir que você publique e acompanhe registros.",
              "Execução de contrato (inciso V)",
            ],
            [
              "Ordenar o feed, a busca e os avisos pela sua proximidade.",
              "Execução de contrato (inciso V)",
            ],
            [
              "Encaminhar registros ao órgão responsável e devolver a você o andamento pelo protocolo.",
              "Execução de contrato (inciso V)",
            ],
            [
              "Analisar conteúdo antes da publicação, moderar denúncias, aplicar limites a contas com histórico de infrações e conter fraude e abuso.",
              "Legítimo interesse (inciso IX)",
            ],
            [
              "Guardar registros de acesso à aplicação.",
              "Cumprimento de obrigação legal (inciso II) — Marco Civil da Internet, art. 15",
            ],
            [
              "Enviar notificações sobre o que acontece na sua região.",
              "Consentimento (inciso I), revogável nas configurações do aparelho",
            ],
          ]}
        />
      </Section>

      <Section id="publico" title="O que fica público">
        <P>
          Esta é a parte mais importante desta política, porque é a que tem
          consequência além de você.
        </P>
        <P>
          Quando você publica um registro, ele aparece <Term>no mapa e no
          feed</Term> de quem está por perto, com o texto, as fotos aprovadas, a
          categoria, o endereço, a localização e a data. É o que faz o
          aplicativo funcionar: um problema que ninguém vê é um problema que
          ninguém resolve.
        </P>
        <P>
          <Term>O que não fica público é você.</Term> No mapa, no feed e na tela
          do registro, o autor aparece como “Um vizinho” — nunca pelo nome. Seu
          nome de exibição só aparece nos comentários, onde é conversa e não
          registro.
        </P>
        <P>
          <Term>Para quem não está autenticado</Term>, as coordenadas são
          arredondadas para cerca de 110 metros. A posição exata de um registro
          permite inferir onde alguém mora; para ler o mapa, o quarteirão basta.
        </P>
        <P>
          Registros só deixam de ser publicados quando violam os{" "}
          <Link className="text-primary underline underline-offset-4" href="/termos">
            termos de uso
          </Link>{" "}
          — conteúdo proibido, dados pessoais de terceiros, material sexual
          explícito. Fora isso, o que você publica fica visível.
        </P>
        <P>
          Registros saem do mapa e do feed conforme a natureza do assunto — de
          12 horas para algo que passa rápido a 30 dias para um problema que fica
          até alguém resolver. Sair do mapa <Term>não apaga</Term>: o registro
          continua no seu histórico, com o protocolo, para você cobrar o órgão.
        </P>
      </Section>

      <Section id="automatizado" title="Análise automática de conteúdo">
        <P>
          Todo registro passa por uma análise automática antes de ser publicado,
          e as mídias anexadas também. É o que impede que conteúdo proibido, dado
          pessoal de terceiro ou material impróprio chegue ao mapa.
        </P>
        <P>
          A análise recebe apenas o conteúdo do registro — categoria, endereço,
          texto e as mídias. <Term>Não recebe seu nome, seu e-mail nem o
          identificador da sua conta.</Term>
        </P>
        <P>
          A análise pode recusar a publicação. Quando isso acontece, o registro{" "}
          <Term>não é apagado</Term> e continua no seu histórico. Nos termos do
          art. 20 da LGPD, você pode pedir revisão humana da decisão pelo canal
          de contato desta política — e um relato legítimo de um problema no
          bairro que tenha sido recusado por engano é exatamente o caso para
          isso.
        </P>
      </Section>

      <Section id="compartilhamento" title="Com quem compartilhamos">
        <P>
          Não vendemos, alugamos nem cedemos seus dados para publicidade. O
          compartilhamento acontece em três situações:
        </P>
        <UL>
          <LI>
            <Term>Fornecedores que operam o serviço.</Term> Empresas contratadas
            para hospedar a aplicação, armazenar as mídias, entregar e-mails e
            notificações e executar a análise automática de conteúdo. Tratam
            dados por nossa conta e ordem, limitados à finalidade contratada, e
            não podem usá-los para fins próprios.
          </LI>
          <LI>
            <Term>Órgãos responsáveis.</Term> É a razão de existir do
            aplicativo: registros são encaminhados ao órgão competente para
            atendimento, com o conteúdo, a localização e o protocolo.
          </LI>
          <LI>
            <Term>Autoridades, mediante requisição legal.</Term> Atendemos ordem
            judicial ou requisição de autoridade competente nos limites da lei.
          </LI>
        </UL>
        <P>
          Parte desses fornecedores processa dados <Term>fora do Brasil</Term>.
          A transferência internacional se apoia nas hipóteses do art. 33 da
          LGPD e em cláusulas contratuais com cada um deles.
        </P>
      </Section>

      <Section id="retencao" title="Por quanto tempo guardamos">
        <UL>
          <LI>
            <Term>Dados da conta:</Term> enquanto a conta existir.
          </LI>
          <LI>
            <Term>Registros e mídias:</Term> permanecem depois de saírem do
            mapa, porque são o histórico do caso e a prova de que você acionou o
            órgão.
          </LI>
          <LI>
            <Term>Registros recusados na análise:</Term> mantidos, para que você
            possa pedir revisão. Não são publicados.
          </LI>
          <LI>
            <Term>Registros de acesso à aplicação:</Term> seis meses, conforme o
            art. 15 do Marco Civil da Internet.
          </LI>
          <LI>
            <Term>Códigos de verificação:</Term> expiram em minutos e são
            apagados na exclusão da conta.
          </LI>
        </UL>
      </Section>

      <Section id="direitos" title="Seus direitos">
        <P>
          A LGPD (art. 18) garante a você, sobre seus dados pessoais:
          confirmação de tratamento, acesso, correção, anonimização,
          portabilidade, eliminação, informação sobre compartilhamento e revisão
          de decisões automatizadas.
        </P>
        <P>No Viicus, boa parte disso não depende de pedir a ninguém:</P>
        <UL>
          <LI>
            <Term>Corrigir seu nome ou e-mail:</Term> em Conta, no aplicativo.
          </LI>
          <LI>
            <Term>Trocar a senha:</Term> em Conta — as demais sessões são
            encerradas.
          </LI>
          <LI>
            <Term>Ver o que você publicou:</Term> na aba de ocorrências, com o
            protocolo de cada uma.
          </LI>
          <LI>
            <Term>Excluir a conta:</Term> em Conta, ou por{" "}
            <Link className="text-primary underline underline-offset-4" href="/excluir-conta">
              esta página
            </Link>
            .
          </LI>
          <LI>
            <Term>Parar de enviar localização:</Term> revogue a permissão nas
            configurações do sistema. O aplicativo continua abrindo, mas o feed
            por proximidade deixa de funcionar.
          </LI>
        </UL>
        <P>
          Para os demais pedidos, escreva para{" "}
          <a
            className="text-primary underline underline-offset-4"
            href={`mailto:${CONTROLLER.dpoEmail}`}
          >
            {CONTROLLER.dpoEmail}
          </a>
          . Respondemos em até 15 dias. Você também pode peticionar diretamente
          à Autoridade Nacional de Proteção de Dados (ANPD).
        </P>
      </Section>

      <Section id="exclusao" title="Exclusão de conta">
        <P>
          A exclusão apaga a pessoa e preserva o caso: seu e-mail, seu nome, sua
          senha, suas sessões, suas reações e seus bloqueios são apagados, e seus
          comentários saem do ar. Os registros que você publicou permanecem, sem
          dono — eles já apareciam como “Um vizinho”, e continuam assim.
        </P>
        <Callout>
          A operação é imediata e irreversível, e o passo a passo — junto com a
          lista exata do que é apagado e do que permanece — está na{" "}
          <Link className="font-semibold underline underline-offset-4" href="/excluir-conta">
            página de exclusão de conta
          </Link>
          .
        </Callout>
      </Section>

      <Section id="seguranca" title="Segurança">
        <P>
          Todo o tráfego entre o aplicativo e nossos servidores é criptografado,
          e sua senha é armazenada de forma criptografada — nem nós conseguimos
          lê-la. O acesso administrativo aos dados é restrito e registrado.
        </P>
        <P>
          Nenhum sistema é imune. Em caso de incidente com risco relevante aos
          seus direitos, comunicaremos você e a ANPD, como manda o art. 48 da
          LGPD.
        </P>
      </Section>

      <Section id="idade" title="Idade mínima">
        <P>
          O Viicus é destinado a pessoas com <Term>16 anos ou mais</Term>. Não
          coletamos conscientemente dados de crianças. Se identificarmos uma
          conta abaixo dessa idade, ela será removida. Responsáveis que
          suspeitem disso podem escrever para{" "}
          <a
            className="text-primary underline underline-offset-4"
            href={`mailto:${CONTROLLER.dpoEmail}`}
          >
            {CONTROLLER.dpoEmail}
          </a>
          .
        </P>
      </Section>

      <Section id="alteracoes" title="Mudanças nesta política">
        <P>
          Quando esta política mudar, a data de atualização no topo muda junto.
          Se a mudança afetar de forma relevante como tratamos seus dados,
          avisaremos no aplicativo antes de ela valer.
        </P>
      </Section>
    </LegalPage>
  );
}
