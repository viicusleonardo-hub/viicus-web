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
  title: "Delete your account",
  description:
    "How to delete your Viicus account, what is erased, what remains, and for how long.",
};

/**
 * Tradução (en) de `./pt-BR.tsx` — o texto de referência é o pt-BR; mudou lá,
 * muda aqui. Esta é a URL de exclusão que a Play Store pode mostrar a
 * usuários de outras línguas; o conteúdo espelha a mesma transação da API que
 * a versão pt-BR descreve.
 */
export default function Content() {
  return (
    <LegalPage
      title="Delete your account"
      intro="You can delete your Viicus account at any time, without asking anyone for permission. This page explains how to do it and exactly what happens."
    >
      <Section id="app" title="Through the app (immediate)">
        <P>It is the fastest path, and it does not depend on us:</P>
        <UL>
          <LI>Open {PRODUCT} and go to the account tab.</LI>
          <LI>
            Tap <Term>Delete account</Term>.
          </LI>
          <LI>Confirm your current password and the deletion.</LI>
        </UL>
        <P>
          The deletion happens immediately. There is no grace period, and there
          is no way to undo it.
        </P>
      </Section>

      <Section id="email" title="By email (if you already uninstalled)">
        <P>
          If you no longer have the app installed, write to{" "}
          <a
            className="text-primary underline underline-offset-4"
            href={`mailto:${CONTROLLER.email}?subject=Account%20deletion`}
          >
            {CONTROLLER.email}
          </a>{" "}
          from the <Term>same email address registered on the account</Term>,
          with the subject “Account deletion”.
        </P>
        <P>
          We confirm the request through that same address and complete the
          deletion within 15 days. We require the matching sender address
          because it is what prevents someone from deleting another
          person&apos;s account.
        </P>
      </Section>

      <Section id="o-que-acontece" title="What is erased and what remains">
        <P>
          Deletion <Term>erases the person and preserves the case</Term>. A
          pothole does not stop existing because the person who reported it
          left the app — and deleting the report would remove from the map a
          problem that is still on the street.
        </P>

        <Table
          head={["Data", "What happens"]}
          rows={[
            ["Email", "Erased"],
            ["Display name", "Erased"],
            ["Password", "Erased"],
            ["Active sessions and access", "Ended and erased"],
            ["Pending verification codes", "Erased"],
            ["Reactions and confirmations you gave", "Erased"],
            ["Blocks you made and blocks made against you", "Erased"],
            ["Content reports you filed", "Erased"],
            ["Notifications and read history", "Erased"],
            [
              "Comments",
              "Removed from public view and unlinked from you — they no longer show any authorship",
            ],
            [
              "Incidents you published",
              "Remain, ownerless. They already appeared as “A neighbor”, so nothing changes for those who see them",
            ],
            [
              "Approved photos and videos in those incidents",
              "Remain, linked to the case and not to you",
            ],
            [
              "Application access logs",
              "Kept for 6 months, as required by law (Marco Civil da Internet — Brazilian Internet Civil Framework, art. 15)",
            ],
            ...(BACKUP_RETENTION_DAYS === null
              ? []
              : [
                  [
                    "Backups",
                    `The erased data survives in database backups for up to ${BACKUP_RETENTION_DAYS} days — encrypted, unused by the application, and discarded when the oldest backup expires`,
                  ],
                ]),
          ]}
        />

        <Callout>
          <p>
            <strong>Save your tracking numbers first.</strong> After deletion,
            your reports stay on the map but no longer have an owner — there is
            no way to reassociate them with you or recover the list through the
            app. If you still need to follow up with a public body, write the
            numbers down before deleting.
          </p>
        </Callout>
      </Section>

      <Section
        id="dados-avulsos"
        title="Erasing only part of it, without deleting the account"
      >
        <P>
          Deleting the account is the most radical path, and it is almost never
          the necessary one. Everything you publish can be deleted
          individually, in the app, at any time — without the account ceasing
          to exist:
        </P>
        <UL>
          <LI>
            <Term>A report you created:</Term> open the report and tap{" "}
            <Term>Delete</Term>. It leaves the map and your history, and the
            attached photos and videos are removed from our storage with it.
          </LI>
          <LI>
            <Term>A comment:</Term> tap <Term>Delete</Term>, right below your
            own comment. Replies to it are removed as well.
          </LI>
          <LI>
            <Term>A confirmation or reaction:</Term> tap the same button again
            to undo it.
          </LI>
          <LI>
            <Term>A block:</Term> undo it in{" "}
            <Term>Settings → Blocked users</Term>.
          </LI>
          <LI>
            <Term>Your name, email, or password:</Term> editable in the account
            tab — changing your display name changes how you appear in
            everything you have already published.
          </LI>
        </UL>
        <P>
          If you want to erase some piece of data that is not on this list,
          write to{" "}
          <a
            className="text-primary underline underline-offset-4"
            href={`mailto:${CONTROLLER.dpoEmail}?subject=Data%20deletion`}
          >
            {CONTROLLER.dpoEmail}
          </a>{" "}
          saying what you want removed. The LGPD (Brazilian General Data
          Protection Law, art. 18) guarantees that request, and it does not
          force you to give up the account.
        </P>
      </Section>

      <Section id="alternativas" title="Maybe you don't need to delete anything">
        <P>If the annoyance is specific, there are even simpler paths:</P>
        <UL>
          <LI>
            <Term>Too many notifications:</Term> turn off alerts in your device
            settings.
          </LI>
          <LI>
            <Term>You don&apos;t want to share your location:</Term> revoke the
            permission in the system settings. You can keep reading the app.
          </LI>
          <LI>
            <Term>Someone bothering you:</Term> block the person — you stop
            seeing what they publish.
          </LI>
        </UL>
      </Section>

      <Section id="duvidas" title="Questions">
        <P>
          About data processing, write to{" "}
          <a
            className="text-primary underline underline-offset-4"
            href={`mailto:${CONTROLLER.dpoEmail}`}
          >
            {CONTROLLER.dpoEmail}
          </a>
          . The complete processing is described in the{" "}
          <Link className="text-primary underline underline-offset-4" href="/en/privacidade">
            privacy policy
          </Link>
          .
        </P>
      </Section>
    </LegalPage>
  );
}
