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
  title: "Terms of use",
  description:
    "The rules for using Viicus: what the service does, what it does not do, what you can post, and what happens when the rules are broken.",
};

/**
 * Tradução (en) de `./pt-BR.tsx` — o texto de referência é o pt-BR; mudou lá,
 * muda aqui. Nomes de leis brasileiras ficam como são, com uma glosa curta
 * entre parênteses — o serviço é regido pela lei do Brasil.
 */
export default function Content() {
  return (
    <LegalPage
      title="Terms of use"
      intro="By creating a Viicus account you agree to these rules. They exist so the app remains the place where a problem in your neighborhood gets solved — not a place where nothing is useful or helps your community."
    >
      <Section id="emergencia" title="Viicus is not an emergency service">
        <Callout>
          <p className="font-semibold">
            In a life-threatening situation, call the emergency services
            immediately.
          </p>
          <p className="mt-3">
            In Brazil: Police <strong>190</strong> · Fire department{" "}
            <strong>193</strong> · SAMU (ambulance) <strong>192</strong> · Civil
            Defense <strong>199</strong>
          </p>
          <p className="mt-3">
            Reporting an incident on {PRODUCT} does not dispatch help, is not
            monitored in real time by anyone, and does not replace calling the
            emergency services.
          </p>
        </Callout>
      </Section>

      <Section id="servico" title="What the service does">
        <P>
          {PRODUCT} lets residents report problems and situations in their
          area, follow what other people have reported nearby, and receive
          notices relevant to where they are.
        </P>
        <P>
          Reports are forwarded to the responsible public body, and you receive
          your own tracking number to follow up. <Term>This is not the opening
          of a formal administrative proceeding</Term>: we do not control the
          handling, the timeline, or the body&apos;s decision, and the {PRODUCT}{" "}
          tracking number does not replace the official channels of the city
          government, the utility company, or any other responsible party.
        </P>
      </Section>

      <Section id="conta" title="Your account">
        <UL>
          <LI>
            You must be <Term>16 or older</Term> to create an account.
          </LI>
          <LI>
            The email you provide must be yours and accessible — it is where
            the verification code and account security notices are sent.
          </LI>
          <LI>
            You are responsible for what happens on your account. If you
            suspect unauthorized access, change your password: that ends all
            other sessions.
          </LI>
          <LI>
            Your display name does not have to be your legal name, but it
            cannot impersonate another person, a public body, or a company.
          </LI>
        </UL>
      </Section>

      <Section id="conteudo" title="What you can post">
        <P>
          The rule is simple: report <Term>a problem or a situation that is
          relevant</Term> to the people who live nearby.
        </P>
        <P>It is not allowed to post:</P>
        <UL>
          <LI>
            <Term>Other people&apos;s personal data</Term> — CPF (Brazilian
            taxpayer ID), phone number, email, someone else&apos;s home
            address, license plates. The app&apos;s editor blocks part of this
            automatically, but the responsibility lies with whoever writes.
          </LI>
          <LI>
            <Term>Accusations against identifiable people.</Term> Describe the
            situation and the place, not who you think is responsible.
          </LI>
          <LI>
            <Term>False or deliberately exaggerated reports.</Term> False
            information on the map makes someone avoid a quiet street or ignore
            a real problem.
          </LI>
          <LI>
            <Term>Prohibited content</Term> — sexually explicit material;
            illegal, discriminatory, or hateful content; and anything that
            exposes people in vulnerable situations.
          </LI>
          <LI>
            Advertising, spam, chain messages, or automated use of the service
            (scraping, bots, bulk requests).
          </LI>
        </UL>
        <P>
          Photos of damage, obstructions, and difficult situations{" "}
          <Term>are expected</Term> — that is the nature of the app. Sensitive
          media may be published behind a blur and a warning.
        </P>
        <P>
          You remain the owner of what you post. By posting, you grant us a
          non-exclusive, royalty-free license to display that content in the
          app and forward it to the responsible public body — which is exactly
          what the service does, and nothing beyond that.
        </P>
      </Section>

      <Section id="moderacao" title="Review, reports, and consequences">
        <P>
          Every report goes through automated review before being published.
          What complies with these terms goes to the map and the feed; what
          does not is declined, and you can request human review. The details
          are in the{" "}
          <Link className="text-primary underline underline-offset-4" href="/en/privacidade#publico">
            privacy policy
          </Link>
          .
        </P>
        <P>
          Anyone can report content and block another user.{" "}
          <Term>Reporting does not hide anything automatically</Term>: it
          prioritizes human review. Hiding content based on the volume of
          reports would turn moderation into a majority vote, which in a
          neighborhood app is neighborhood censorship.
        </P>
        <P>When a report is upheld, the author receives a warning:</P>
        <UL>
          <LI>
            <Term>3 warnings within 90 days:</Term> the account is limited to 3
            reports per day.
          </LI>
          <LI>
            <Term>6 warnings within 90 days:</Term> the account is suspended.
            You can still read, sign out, and delete the account.
          </LI>
        </UL>
        <P>
          Warnings leave the count after 90 days. If you believe a decision was
          wrong — including one made by the automated review — write to{" "}
          <a
            className="text-primary underline underline-offset-4"
            href={`mailto:${CONTROLLER.email}`}
          >
            {CONTROLLER.email}
          </a>{" "}
          and we will arrange human review.
        </P>
      </Section>

      <Section id="disponibilidade" title="Availability and limits">
        <P>
          The service is offered free of charge and as is. We do not guarantee
          uninterrupted availability, absence of failures, or the accuracy of
          content posted by other users — what is on the map is a
          resident&apos;s report, not a technical assessment.
        </P>
        <P>
          We are not liable for decisions made solely on the basis of
          information posted by third parties in the app. Nothing here waives
          the rights guaranteed to you by the Código de Defesa do Consumidor
          (Brazilian Consumer Protection Code).
        </P>
      </Section>

      <Section id="encerramento" title="Termination">
        <P>
          You can close your account whenever you want, through the app or
          through{" "}
          <Link className="text-primary underline underline-offset-4" href="/en/excluir-conta">
            this page
          </Link>
          . We may suspend or close accounts that violate these terms in a
          serious or repeated way, stating the reason.
        </P>
      </Section>

      <Section id="alteracoes" title="Changes to these terms">
        <P>
          We may change these terms. Significant changes are announced in the
          app before they take effect, and the update date at the top of this
          page changes with them. Continuing to use the service after that
          means accepting the new version.
        </P>
      </Section>

      <Section id="lei" title="Governing law">
        <P>
          These terms are governed by the laws of Brazil. The courts of the
          user&apos;s place of residence are chosen to settle any dispute.
        </P>
      </Section>
    </LegalPage>
  );
}
