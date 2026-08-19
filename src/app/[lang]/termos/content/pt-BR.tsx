import Link from "next/link";

import {
  Callout,
  LegalPage,
  LI,
  P,
  Section,
  Term,
  UL,
} from "@/components/legal";
import { CONTROLLER, PRODUCT } from "@/lib/legal";

export const meta = {
  title: "Termos de uso",
  description:
    "As regras de uso do Viicus: o que o serviço faz, o que ele não faz, o que você pode publicar e o que acontece quando as regras são quebradas.",
};

/**
 * Termos de uso (pt-BR — o texto de referência; `en.tsx` e `es.tsx` são
 * traduções dele e devem mudar junto).
 *
 * Dois pontos aqui não são formalidade e não devem ser suavizados numa
 * revisão futura:
 *
 * - O aviso de que o Viicus NÃO é serviço de emergência. Um aplicativo onde se
 *   registra acidente, incêndio e alagamento vai ser usado por alguém em
 *   pânico; o texto precisa dizer, antes de qualquer outra coisa, para onde
 *   essa pessoa deve ligar.
 * - O que o encaminhamento ao órgão significa. Registrar aqui não é protocolar
 *   uma ocorrência formal, e prometer isso implicitamente criaria uma
 *   expectativa que nem nós nem o órgão controlamos.
 */
export default function Content() {
  return (
    <LegalPage
      title="Termos de uso"
      intro="Ao criar uma conta no Viicus você concorda com estas regras. Elas existem para que o aplicativo continue sendo o lugar onde um problema no seu bairro é resolvido — e não um lugar onde nada é útil nem ajuda a sua comunidade."
    >
      <Section id="emergencia" title="O Viicus não é um serviço de emergência">
        <Callout>
          <p className="font-semibold">
            Em situação de risco à vida, ligue imediatamente para os serviços de
            emergência.
          </p>
          <p className="mt-3">
            Polícia <strong>190</strong> · Bombeiros <strong>193</strong> ·
            SAMU <strong>192</strong> · Defesa Civil <strong>199</strong>
          </p>
          <p className="mt-3">
            Registrar uma ocorrência no {PRODUCT} não aciona socorro, não é
            monitorado em tempo real por ninguém e não substitui o acionamento
            dos serviços de emergência.
          </p>
        </Callout>
      </Section>

      <Section id="servico" title="O que o serviço faz">
        <P>
          O {PRODUCT} permite que moradores registrem problemas e situações da
          sua região, acompanhem o que outras pessoas registraram por perto e
          recebam avisos relevantes para a área onde estão.
        </P>
        <P>
          Registros são encaminhados ao órgão responsável, e você recebe um
          protocolo próprio para acompanhar. <Term>Isso não é a abertura de um
          processo administrativo formal</Term>: não controlamos o atendimento,
          o prazo nem a decisão do órgão, e o protocolo do {PRODUCT} não
          substitui os canais oficiais da prefeitura, da concessionária ou de
          qualquer outro responsável.
        </P>
      </Section>

      <Section id="conta" title="Sua conta">
        <UL>
          <LI>
            É preciso ter <Term>16 anos ou mais</Term> para criar uma conta.
          </LI>
          <LI>
            O e-mail informado precisa ser seu e estar acessível — é por ele que
            chegam a verificação e os avisos de segurança da conta.
          </LI>
          <LI>
            Você é responsável pelo que acontece na sua conta. Se suspeitar de
            acesso indevido, troque a senha: isso encerra as demais sessões.
          </LI>
          <LI>
            O nome de exibição não precisa ser seu nome civil, mas não pode se
            passar por outra pessoa, por órgão público ou por empresa.
          </LI>
        </UL>
      </Section>

      <Section id="conteudo" title="O que você pode publicar">
        <P>
          A regra é simples: relate <Term>um problema ou uma situação
          relevante</Term> para quem mora por perto.
        </P>
        <P>Não é permitido publicar:</P>
        <UL>
          <LI>
            <Term>Dados pessoais de terceiros</Term> — CPF, telefone, e-mail,
            endereço residencial de outra pessoa, placa de veículo. O editor do
            aplicativo bloqueia parte disso automaticamente, mas a
            responsabilidade é de quem escreve.
          </LI>
          <LI>
            <Term>Acusações contra pessoas identificáveis.</Term> Descreva a
            situação e o lugar, não quem você acha que é o responsável.
          </LI>
          <LI>
            <Term>Registros falsos ou deliberadamente exagerados.</Term> Uma
            informação falsa no mapa faz alguém desviar de uma rua tranquila ou
            ignorar um problema real.
          </LI>
          <LI>
            <Term>Conteúdo proibido</Term> — material sexual explícito, conteúdo
            ilegal, discriminatório ou de ódio, e qualquer coisa que exponha
            pessoas em situação de vulnerabilidade.
          </LI>
          <LI>
            Publicidade, spam, correntes ou uso automatizado do serviço
            (raspagem, robôs, requisições em massa).
          </LI>
        </UL>
        <P>
          Fotos de danos, de obstruções e de situações difíceis <Term>são
          esperadas</Term> — é a natureza do aplicativo. Mídias sensíveis podem
          ser publicadas com véu e aviso.
        </P>
        <P>
          Você continua sendo o titular do que publica. Ao publicar, você nos
          concede uma licença não exclusiva e gratuita para exibir esse conteúdo
          no aplicativo e encaminhá-lo ao órgão responsável — que é exatamente o
          que o serviço faz, e nada além disso.
        </P>
      </Section>

      <Section id="moderacao" title="Análise, denúncia e consequências">
        <P>
          Todo registro passa por análise automática antes de ser publicado. O
          que está de acordo com estes termos vai ao mapa e ao feed; o que não
          está é recusado, e você pode pedir revisão humana. Os detalhes estão
          na{" "}
          <Link className="text-primary underline underline-offset-4" href="/privacidade#publico">
            política de privacidade
          </Link>
          .
        </P>
        <P>
          Qualquer pessoa pode denunciar um conteúdo e bloquear outro usuário.{" "}
          <Term>A denúncia não oculta nada automaticamente</Term>: ela prioriza
          a análise humana. Ocultar conteúdo por volume de denúncias
          transformaria a moderação em disputa de maioria, o que num aplicativo
          de bairro é censura de vizinhança.
        </P>
        <P>Quando uma denúncia é acolhida, o autor recebe uma advertência:</P>
        <UL>
          <LI>
            <Term>3 advertências em 90 dias:</Term> a conta fica limitada a 3
            registros por dia.
          </LI>
          <LI>
            <Term>6 advertências em 90 dias:</Term> a conta é suspensa. Você
            continua podendo ler, sair e excluir a conta.
          </LI>
        </UL>
        <P>
          Advertências saem da contagem depois de 90 dias. Se você considerar
          uma decisão equivocada — inclusive uma tomada pela análise automática
          — escreva para{" "}
          <a
            className="text-primary underline underline-offset-4"
            href={`mailto:${CONTROLLER.email}`}
          >
            {CONTROLLER.email}
          </a>{" "}
          e pedimos revisão humana.
        </P>
      </Section>

      <Section id="disponibilidade" title="Disponibilidade e limites">
        <P>
          O serviço é oferecido gratuitamente e no estado em que se encontra.
          Não garantimos disponibilidade ininterrupta, ausência de falhas, nem a
          exatidão do conteúdo publicado por outros usuários — o que está no
          mapa é relato de morador, não laudo técnico.
        </P>
        <P>
          Não nos responsabilizamos por decisões tomadas exclusivamente com base
          em informação publicada por terceiros no aplicativo. Nada aqui afasta
          os direitos que o Código de Defesa do Consumidor garante a você.
        </P>
      </Section>

      <Section id="encerramento" title="Encerramento">
        <P>
          Você pode encerrar sua conta quando quiser, pelo aplicativo ou por{" "}
          <Link className="text-primary underline underline-offset-4" href="/excluir-conta">
            esta página
          </Link>
          . Podemos suspender ou encerrar contas que violem estes termos de
          forma grave ou reiterada, comunicando o motivo.
        </P>
      </Section>

      <Section id="alteracoes" title="Mudanças nestes termos">
        <P>
          Podemos alterar estes termos. Mudanças relevantes são avisadas no
          aplicativo antes de valer, e a data de atualização no topo desta
          página muda junto. Continuar usando o serviço depois disso significa
          aceitar a nova versão.
        </P>
      </Section>

      <Section id="lei" title="Lei aplicável">
        <P>
          Estes termos são regidos pelas leis brasileiras. Fica eleito o foro do
          domicílio do usuário para dirimir qualquer controvérsia.
        </P>
      </Section>
    </LegalPage>
  );
}
