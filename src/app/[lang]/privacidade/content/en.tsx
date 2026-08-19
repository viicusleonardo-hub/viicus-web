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
  title: "Privacy policy",
  description:
    "What data Viicus collects, why, what is visible to other people, how long we keep it, and how you exercise your rights.",
};

/**
 * Tradução (en) de `./pt-BR.tsx` — o texto de referência é o pt-BR; mudou lá,
 * muda aqui. Nomes de leis brasileiras ficam como são, com uma glosa curta
 * entre parênteses — o tratamento é regido pela lei do Brasil.
 */
export default function Content() {
  return (
    <LegalPage
      title="Privacy policy"
      intro="Viicus is an app where residents report problems in their area and follow what happens nearby. That only works with two sensitive pieces of data: where you are and what you write. This page explains exactly what we do with them."
    >
      <Section id="resumo" title="The essentials, in one screen">
        <UL>
          <LI>
            <Term>Your location goes to the server</Term> every time the app
            builds the feed, runs a search, or checks for notices nearby. It is
            how it knows what is “near you”.
          </LI>
          <LI>
            <Term>Your name does not appear on reports.</Term> Whoever
            publishes an incident appears as “A neighbor” on the map, in the
            feed, and on the report screen. Your display name only appears in
            comments.
          </LI>
          <LI>
            <Term>What you report is public</Term> — the text, photos,
            category, and location appear on the map and in the feed of people
            nearby.
          </LI>
          <LI>
            <Term>We do not sell your data</Term>, we do not show advertising,
            and we do not use your information for commercial profiling.
          </LI>
          <LI>
            <Term>You can delete your account</Term> in the app itself or
            through this{" "}
            <Link className="text-primary underline underline-offset-4" href="/en/excluir-conta">
              page
            </Link>
            , without having to talk to anyone.
          </LI>
        </UL>
      </Section>

      <Section id="controlador" title="Who is responsible for your data">
        <P>
          For the purposes of the LGPD (Brazilian General Data Protection Law,
          Law No. 13,709/2018), the controller of the data processed in Viicus
          is:
        </P>
        <ControllerIdentity />
      </Section>

      <Section id="dados" title="What data we collect">
        <P>
          We collect the minimum the app needs to work. There is no social
          sign-up, and we do not ask for CPF (Brazilian taxpayer ID), identity
          documents, or phone number.
        </P>

        <Table
          head={["Data", "When it is collected", "Why"]}
          rows={[
            [
              "Email",
              "At sign-up",
              "It is your login identity and the channel for the verification code and account security notices.",
            ],
            [
              "Display name",
              "At sign-up",
              "Identifies you in comments. You choose it — it does not have to be your legal name.",
            ],
            [
              "Password",
              "At sign-up",
              "Stored encrypted. We have no way to read your password.",
            ],
            [
              "Precise location",
              "While the app is in use",
              "Building the feed by proximity, searching nearby, notifying you about alerts in your area, and positioning the report you publish.",
            ],
            [
              "Photos and videos",
              "When you attach them to a report",
              "Showing the problem. They go through automated review before publishing.",
            ],
            [
              "Report text, category, and address",
              "When you publish",
              "It is the content of the report, and what is forwarded to the responsible public body.",
            ],
            [
              "Comments, confirmations, and reactions",
              "When you interact",
              "Confirming reports and talking about them.",
            ],
            [
              "Content reports and blocks",
              "When you use those actions",
              "Moderation and your ability to not see someone.",
            ],
            [
              "Platform and notification token",
              "If you allow notifications",
              "Delivering important notices to your device.",
            ],
            [
              "IP address and access logs",
              "On every request",
              "Security: limiting sign-up attempts, containing abuse, and complying with the log retention required by the Marco Civil da Internet (Brazilian Internet Civil Framework).",
            ],
          ]}
        />

        <P>
          <Term>We do not collect</Term> your contact list, your browsing
          history, advertising identifiers, or your location in the background
          — when the app is closed, it does not know where you are.
        </P>

        <P>
          The app&apos;s report editor <Term>blocks</Term> the publication of
          CPF numbers, phone numbers, and emails inside the text, and warns you
          when the report seems to single out a specific person. Even so, what
          you write is your responsibility: do not include other people&apos;s
          data.
        </P>
      </Section>

      <Section id="finalidades" title="What we use it for, and on which legal basis">
        <Table
          head={["Purpose", "Legal basis (LGPD, art. 7)"]}
          rows={[
            [
              "Creating and maintaining your account, authenticating your access, and letting you publish and follow reports.",
              "Performance of a contract (item V)",
            ],
            [
              "Ordering the feed, the search, and the notices by your proximity.",
              "Performance of a contract (item V)",
            ],
            [
              "Forwarding reports to the responsible public body and returning their progress to you through the tracking number.",
              "Performance of a contract (item V)",
            ],
            [
              "Reviewing content before publication, moderating reports, applying limits to accounts with a history of violations, and containing fraud and abuse.",
              "Legitimate interest (item IX)",
            ],
            [
              "Keeping application access logs.",
              "Compliance with a legal obligation (item II) — Marco Civil da Internet, art. 15",
            ],
            [
              "Sending notifications about what happens in your area.",
              "Consent (item I), revocable in your device settings",
            ],
          ]}
        />
      </Section>

      <Section id="publico" title="What is public">
        <P>
          This is the most important part of this policy, because it is the one
          with consequences beyond you.
        </P>
        <P>
          When you publish a report, it appears <Term>on the map and in the
          feed</Term> of people nearby, with the text, the approved photos, the
          category, the address, the location, and the date. That is what makes
          the app work: a problem nobody sees is a problem nobody solves.
        </P>
        <P>
          <Term>What is not public is you.</Term> On the map, in the feed, and
          on the report screen, the author appears as “A neighbor” — never by
          name. Your display name only appears in comments, where it is
          conversation, not a report.
        </P>
        <P>
          <Term>For people who are not signed in</Term>, coordinates are
          rounded to about 110 meters. The exact position of a report can
          reveal where someone lives; to read the map, the block is enough.
        </P>
        <P>
          Reports only stop being published when they violate the{" "}
          <Link className="text-primary underline underline-offset-4" href="/en/termos">
            terms of use
          </Link>{" "}
          — prohibited content, other people&apos;s personal data, sexually
          explicit material. Beyond that, what you publish stays visible.
        </P>
        <P>
          Reports leave the map and the feed according to the nature of the
          issue — from 12 hours for something short-lived to 30 days for a
          problem that stays until someone fixes it. Leaving the map{" "}
          <Term>does not delete it</Term>: the report remains in your history,
          with its tracking number, so you can follow up with the public body.
        </P>
      </Section>

      <Section id="automatizado" title="Automated content review">
        <P>
          Every report goes through automated review before being published,
          and so do attached media. It is what keeps prohibited content,
          third-party personal data, and inappropriate material off the map.
        </P>
        <P>
          The review receives only the content of the report — category,
          address, text, and media. <Term>It does not receive your name, your
          email, or your account identifier.</Term>
        </P>
        <P>
          The review can decline publication. When that happens, the report{" "}
          <Term>is not deleted</Term> and remains in your history. Under art.
          20 of the LGPD, you can request human review of the decision through
          this policy&apos;s contact channel — and a legitimate report of a
          neighborhood problem declined by mistake is exactly the case for
          that.
        </P>
      </Section>

      <Section id="compartilhamento" title="Who we share it with">
        <P>
          We do not sell, rent, or hand over your data for advertising.
          Sharing happens in three situations:
        </P>
        <UL>
          <LI>
            <Term>Vendors that operate the service.</Term> Companies hired to
            host the application, store media, deliver emails and
            notifications, and run the automated content review. They process
            data on our behalf and under our instructions, limited to the
            contracted purpose, and cannot use it for their own ends.
          </LI>
          <LI>
            <Term>Responsible public bodies.</Term> It is the app&apos;s reason
            to exist: reports are forwarded to the competent body for handling,
            with the content, the location, and the tracking number.
          </LI>
          <LI>
            <Term>Authorities, upon legal request.</Term> We comply with court
            orders or requests from competent authorities within the limits of
            the law.
          </LI>
        </UL>
        <P>
          Some of these vendors process data <Term>outside Brazil</Term>.
          International transfers rely on the hypotheses of art. 33 of the LGPD
          and on contractual clauses with each of them.
        </P>
      </Section>

      <Section id="retencao" title="How long we keep it">
        <UL>
          <LI>
            <Term>Account data:</Term> for as long as the account exists.
          </LI>
          <LI>
            <Term>Reports and media:</Term> remain after leaving the map,
            because they are the case history and the proof that you contacted
            the public body.
          </LI>
          <LI>
            <Term>Reports declined in review:</Term> kept, so you can request
            review. They are not published.
          </LI>
          <LI>
            <Term>Application access logs:</Term> six months, under art. 15 of
            the Marco Civil da Internet (Brazilian Internet Civil Framework).
          </LI>
          <LI>
            <Term>Verification codes:</Term> expire within minutes and are
            deleted when the account is deleted.
          </LI>
        </UL>
      </Section>

      <Section id="direitos" title="Your rights">
        <P>
          The LGPD (art. 18) guarantees you, regarding your personal data:
          confirmation of processing, access, correction, anonymization,
          portability, deletion, information about sharing, and review of
          automated decisions.
        </P>
        <P>On Viicus, much of that does not depend on asking anyone:</P>
        <UL>
          <LI>
            <Term>Correcting your name or email:</Term> in Account, in the app.
          </LI>
          <LI>
            <Term>Changing your password:</Term> in Account — all other
            sessions are ended.
          </LI>
          <LI>
            <Term>Seeing what you published:</Term> in the incidents tab, with
            each report&apos;s tracking number.
          </LI>
          <LI>
            <Term>Deleting your account:</Term> in Account, or through{" "}
            <Link className="text-primary underline underline-offset-4" href="/en/excluir-conta">
              this page
            </Link>
            .
          </LI>
          <LI>
            <Term>Stopping location sharing:</Term> revoke the permission in
            your system settings. The app still opens, but the proximity feed
            stops working.
          </LI>
        </UL>
        <P>
          For other requests, write to{" "}
          <a
            className="text-primary underline underline-offset-4"
            href={`mailto:${CONTROLLER.dpoEmail}`}
          >
            {CONTROLLER.dpoEmail}
          </a>
          . We reply within 15 days. You can also petition the ANPD
          (Brazil&apos;s National Data Protection Authority) directly.
        </P>
      </Section>

      <Section id="exclusao" title="Account deletion">
        <P>
          Deletion erases the person and preserves the case: your email, your
          name, your password, your sessions, your reactions, and your blocks
          are erased, and your comments are taken down. The reports you
          published remain, ownerless — they already appeared as “A neighbor”,
          and they stay that way.
        </P>
        <Callout>
          The operation is immediate and irreversible, and the step by step —
          along with the exact list of what is erased and what remains — is on
          the{" "}
          <Link className="font-semibold underline underline-offset-4" href="/en/excluir-conta">
            account deletion page
          </Link>
          .
        </Callout>
      </Section>

      <Section id="seguranca" title="Security">
        <P>
          All traffic between the app and our servers is encrypted, and your
          password is stored encrypted — not even we can read it.
          Administrative access to data is restricted and logged.
        </P>
        <P>
          No system is immune. In the event of an incident with relevant risk
          to your rights, we will notify you and the ANPD, as required by art.
          48 of the LGPD.
        </P>
      </Section>

      <Section id="idade" title="Minimum age">
        <P>
          Viicus is intended for people aged <Term>16 or older</Term>. We do
          not knowingly collect data from children. If we identify an account
          below that age, it will be removed. Guardians who suspect this can
          write to{" "}
          <a
            className="text-primary underline underline-offset-4"
            href={`mailto:${CONTROLLER.dpoEmail}`}
          >
            {CONTROLLER.dpoEmail}
          </a>
          .
        </P>
      </Section>

      <Section id="alteracoes" title="Changes to this policy">
        <P>
          When this policy changes, the update date at the top changes with it.
          If the change significantly affects how we handle your data, we will
          announce it in the app before it takes effect.
        </P>
      </Section>
    </LegalPage>
  );
}
