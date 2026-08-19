import Link from "next/link";

import {
  Callout,
  LegalPage,
  LI,
  P,
  Section,
  Table,
  Term,
  UL,
} from "@/components/legal";
import { BACKUP_RETENTION_DAYS, CONTROLLER, PRODUCT } from "@/lib/legal";

export const meta = {
  title: "Excluir sua conta",
  description:
    "Como excluir sua conta do Viicus, o que é apagado, o que permanece e por quanto tempo.",
};

/**
 * Página de exclusão de conta (pt-BR — o texto de referência; `en.tsx` e
 * `es.tsx` são traduções dele e devem mudar junto).
 *
 * Existe por exigência da Google Play — apps com conta precisam de uma URL
 * pública, acessível SEM login e SEM instalar o aplicativo, que explique como
 * pedir a exclusão e o que acontece com os dados. É por isso que o caminho
 * pelo e-mail está aqui mesmo com a exclusão in-app funcionando: quem
 * desinstalou o app não tem como usar a tela.
 *
 * O conteúdo espelha `services/account-deletion.ts` da API — a divisão entre o
 * que é apagado e o que é anonimizado é a da transação de lá, não uma
 * descrição aproximada. E o rótulo do autor é o mesmo que o app exibe ("Um
 * vizinho", de `features/community/author-name`) de propósito: quem leu uma
 * coisa e fez a outra não pode encontrar duas versões do mesmo fato.
 */
export default function Content() {
  return (
    <LegalPage
      title="Excluir sua conta"
      intro="Você pode apagar sua conta do Viicus a qualquer momento, sem precisar pedir autorização a ninguém. Esta página explica como fazer e o que exatamente acontece."
    >
      <Section id="app" title="Pelo aplicativo (imediato)">
        <P>É o caminho mais rápido, e não depende de nós:</P>
        <UL>
          <LI>Abra o {PRODUCT} e vá até a aba de conta.</LI>
          <LI>
            Toque em <Term>Excluir conta</Term>.
          </LI>
          <LI>Confirme sua senha atual e a exclusão.</LI>
        </UL>
        <P>
          A exclusão acontece na hora. Não há período de carência, e não há como
          desfazer.
        </P>
      </Section>

      <Section id="email" title="Por e-mail (se você já desinstalou)">
        <P>
          Se não tem mais o aplicativo instalado, escreva para{" "}
          <a
            className="text-primary underline underline-offset-4"
            href={`mailto:${CONTROLLER.email}?subject=Exclus%C3%A3o%20de%20conta`}
          >
            {CONTROLLER.email}
          </a>{" "}
          a partir do <Term>mesmo endereço de e-mail cadastrado na conta</Term>,
          com o assunto “Exclusão de conta”.
        </P>
        <P>
          Confirmamos o pedido pelo próprio endereço e concluímos a exclusão em
          até 15 dias. Pedimos o e-mail de origem coincidente porque é o que
          impede alguém de apagar a conta de outra pessoa.
        </P>
      </Section>

      <Section id="o-que-acontece" title="O que é apagado e o que permanece">
        <P>
          A exclusão <Term>apaga a pessoa e preserva o caso</Term>. Um buraco na
          via não deixa de existir porque quem o reportou saiu do aplicativo — e
          apagar o registro tiraria do mapa um problema que continua na rua.
        </P>

        <Table
          head={["Dado", "O que acontece"]}
          rows={[
            ["E-mail", "Apagado"],
            ["Nome de exibição", "Apagado"],
            ["Senha", "Apagada"],
            ["Sessões e acessos ativos", "Encerrados e apagados"],
            ["Códigos de verificação pendentes", "Apagados"],
            ["Reações e confirmações que você deu", "Apagadas"],
            ["Bloqueios que você fez e que fizeram a você", "Apagados"],
            ["Denúncias de conteúdo que você fez", "Apagadas"],
            ["Notificações e histórico de leitura", "Apagados"],
            [
              "Comentários",
              "Removidos do público e desvinculados de você — deixam de mostrar qualquer autoria",
            ],
            [
              "Ocorrências que você publicou",
              "Permanecem, sem dono. Elas já apareciam como “Um vizinho”, então nada muda para quem vê",
            ],
            [
              "Fotos e vídeos aprovados nessas ocorrências",
              "Permanecem, vinculados ao caso e não a você",
            ],
            [
              "Registros de acesso à aplicação",
              "Mantidos por 6 meses, por obrigação legal (Marco Civil da Internet, art. 15)",
            ],
            ...(BACKUP_RETENTION_DAYS === null
              ? []
              : [
                  [
                    "Cópias de segurança",
                    `Os dados apagados sobrevivem nas cópias de segurança do banco por até ${BACKUP_RETENTION_DAYS} dias — criptografados, sem uso na aplicação e descartados quando a cópia mais antiga expira`,
                  ],
                ]),
          ]}
        />

        <Callout>
          <p>
            <strong>Guarde seus protocolos antes.</strong> Depois da exclusão,
            os registros continuam no mapa, mas deixam de ter dono — não há como
            reassociá-los a você nem recuperar a lista pelo aplicativo. Se ainda
            precisa cobrar algum órgão, anote os números antes de excluir.
          </p>
        </Callout>
      </Section>

      <Section
        id="dados-avulsos"
        title="Apagar só uma parte, sem excluir a conta"
      >
        <P>
          Excluir a conta é o caminho mais radical, e quase nunca é o
          necessário. Tudo o que você publica pode ser apagado individualmente,
          pelo aplicativo, a qualquer momento — e sem que a conta deixe de
          existir:
        </P>
        <UL>
          <LI>
            <Term>Um registro que você criou:</Term> abra o registro e toque em{" "}
            <Term>Excluir</Term>. Ele sai do mapa e do histórico, e as fotos e
            vídeos anexados são removidos do nosso armazenamento junto.
          </LI>
          <LI>
            <Term>Um comentário:</Term> toque em <Term>Excluir</Term>, logo
            abaixo do seu próprio comentário. As respostas a ele saem junto.
          </LI>
          <LI>
            <Term>Uma confirmação ou reação:</Term> toque de novo no mesmo botão
            para desfazer.
          </LI>
          <LI>
            <Term>Um bloqueio:</Term> desfaça em{" "}
            <Term>Ajustes → Usuários bloqueados</Term>.
          </LI>
          <LI>
            <Term>Seu nome, e-mail ou senha:</Term> editáveis na aba de conta —
            trocar o nome de exibição muda como você aparece em tudo o que já
            publicou.
          </LI>
        </UL>
        <P>
          Se você quiser apagar algum dado que não esteja nesta lista, escreva
          para{" "}
          <a
            className="text-primary underline underline-offset-4"
            href={`mailto:${CONTROLLER.dpoEmail}?subject=Exclus%C3%A3o%20de%20dados`}
          >
            {CONTROLLER.dpoEmail}
          </a>{" "}
          dizendo o que quer remover. A LGPD (art. 18) garante esse pedido, e
          ele não obriga você a abrir mão da conta.
        </P>
      </Section>

      <Section id="alternativas" title="Talvez você não precise excluir nada">
        <P>Se o incômodo for específico, há caminhos ainda mais simples:</P>
        <UL>
          <LI>
            <Term>Notificações demais:</Term> desative os avisos nas
            configurações do aparelho.
          </LI>
          <LI>
            <Term>Não quer enviar localização:</Term> revogue a permissão nas
            configurações do sistema. Você continua lendo o aplicativo.
          </LI>
          <LI>
            <Term>Alguém incomodando:</Term> bloqueie a pessoa — você deixa de
            ver o que ela publica.
          </LI>
        </UL>
      </Section>

      <Section id="duvidas" title="Dúvidas">
        <P>
          Sobre tratamento de dados, escreva para{" "}
          <a
            className="text-primary underline underline-offset-4"
            href={`mailto:${CONTROLLER.dpoEmail}`}
          >
            {CONTROLLER.dpoEmail}
          </a>
          . O tratamento completo está descrito na{" "}
          <Link className="text-primary underline underline-offset-4" href="/privacidade">
            política de privacidade
          </Link>
          .
        </P>
      </Section>
    </LegalPage>
  );
}
