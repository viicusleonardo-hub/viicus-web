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
  title: "Eliminar tu cuenta",
  description:
    "Cómo eliminar tu cuenta de Viicus, qué se borra, qué permanece y por cuánto tiempo.",
};

/**
 * Tradução (es) de `./pt-BR.tsx` — o texto de referência é o pt-BR; mudou lá,
 * muda aqui. Esta é a URL de exclusão que a Play Store pode mostrar a
 * usuários de outras línguas; o conteúdo espelha a mesma transação da API que
 * a versão pt-BR descreve.
 */
export default function Content() {
  return (
    <LegalPage
      title="Eliminar tu cuenta"
      intro="Puedes borrar tu cuenta de Viicus en cualquier momento, sin pedirle autorización a nadie. Esta página explica cómo hacerlo y qué pasa exactamente."
    >
      <Section id="app" title="Desde la aplicación (inmediato)">
        <P>Es el camino más rápido, y no depende de nosotros:</P>
        <UL>
          <LI>Abre {PRODUCT} y ve a la pestaña de cuenta.</LI>
          <LI>
            Toca <Term>Eliminar cuenta</Term>.
          </LI>
          <LI>Confirma tu contraseña actual y la eliminación.</LI>
        </UL>
        <P>
          La eliminación ocurre al instante. No hay período de espera, y no hay
          manera de deshacerla.
        </P>
      </Section>

      <Section id="email" title="Por correo (si ya desinstalaste)">
        <P>
          Si ya no tienes la aplicación instalada, escribe a{" "}
          <a
            className="text-primary underline underline-offset-4"
            href={`mailto:${CONTROLLER.email}?subject=Eliminaci%C3%B3n%20de%20cuenta`}
          >
            {CONTROLLER.email}
          </a>{" "}
          desde la <Term>misma dirección de correo registrada en la
          cuenta</Term>, con el asunto “Eliminación de cuenta”.
        </P>
        <P>
          Confirmamos el pedido por esa misma dirección y concluimos la
          eliminación en un plazo de 15 días. Pedimos que el correo de origen
          coincida porque es lo que impide que alguien borre la cuenta de otra
          persona.
        </P>
      </Section>

      <Section id="o-que-acontece" title="Qué se borra y qué permanece">
        <P>
          La eliminación <Term>borra a la persona y preserva el caso</Term>. Un
          bache en la vía no deja de existir porque quien lo reportó salió de
          la aplicación — y borrar el registro sacaría del mapa un problema que
          sigue en la calle.
        </P>

        <Table
          head={["Dato", "Qué pasa"]}
          rows={[
            ["Correo electrónico", "Borrado"],
            ["Nombre visible", "Borrado"],
            ["Contraseña", "Borrada"],
            ["Sesiones y accesos activos", "Cerrados y borrados"],
            ["Códigos de verificación pendientes", "Borrados"],
            ["Reacciones y confirmaciones que diste", "Borradas"],
            ["Bloqueos que hiciste y que te hicieron", "Borrados"],
            ["Denuncias de contenido que hiciste", "Borradas"],
            ["Notificaciones e historial de lectura", "Borrados"],
            [
              "Comentarios",
              "Retirados del público y desvinculados de ti — dejan de mostrar cualquier autoría",
            ],
            [
              "Incidentes que publicaste",
              "Permanecen, sin dueño. Ya aparecían como “Un vecino”, así que nada cambia para quien los ve",
            ],
            [
              "Fotos y videos aprobados en esos incidentes",
              "Permanecen, vinculados al caso y no a ti",
            ],
            [
              "Registros de acceso a la aplicación",
              "Se mantienen 6 meses, por obligación legal (Marco Civil da Internet — ley brasileña de internet, art. 15)",
            ],
            ...(BACKUP_RETENTION_DAYS === null
              ? []
              : [
                  [
                    "Copias de seguridad",
                    `Los datos borrados sobreviven en las copias de seguridad de la base de datos hasta ${BACKUP_RETENTION_DAYS} días — cifrados, sin uso en la aplicación y descartados cuando la copia más antigua expira`,
                  ],
                ]),
          ]}
        />

        <Callout>
          <p>
            <strong>Guarda tus números de seguimiento antes.</strong> Después
            de la eliminación, los registros siguen en el mapa, pero dejan de
            tener dueño — no hay manera de reasociarlos a ti ni de recuperar la
            lista desde la aplicación. Si todavía necesitas reclamar a algún
            organismo, anota los números antes de eliminar.
          </p>
        </Callout>
      </Section>

      <Section
        id="dados-avulsos"
        title="Borrar solo una parte, sin eliminar la cuenta"
      >
        <P>
          Eliminar la cuenta es el camino más radical, y casi nunca es el
          necesario. Todo lo que publicas puede borrarse individualmente, desde
          la aplicación, en cualquier momento — y sin que la cuenta deje de
          existir:
        </P>
        <UL>
          <LI>
            <Term>Un registro que creaste:</Term> abre el registro y toca{" "}
            <Term>Eliminar</Term>. Sale del mapa y del historial, y las fotos y
            videos adjuntos se eliminan de nuestro almacenamiento con él.
          </LI>
          <LI>
            <Term>Un comentario:</Term> toca <Term>Eliminar</Term>, justo
            debajo de tu propio comentario. Las respuestas a él salen también.
          </LI>
          <LI>
            <Term>Una confirmación o reacción:</Term> toca de nuevo el mismo
            botón para deshacerla.
          </LI>
          <LI>
            <Term>Un bloqueo:</Term> deshazlo en{" "}
            <Term>Ajustes → Usuarios bloqueados</Term>.
          </LI>
          <LI>
            <Term>Tu nombre, correo o contraseña:</Term> editables en la
            pestaña de cuenta — cambiar el nombre visible cambia cómo apareces
            en todo lo que ya publicaste.
          </LI>
        </UL>
        <P>
          Si quieres borrar algún dato que no esté en esta lista, escribe a{" "}
          <a
            className="text-primary underline underline-offset-4"
            href={`mailto:${CONTROLLER.dpoEmail}?subject=Eliminaci%C3%B3n%20de%20datos`}
          >
            {CONTROLLER.dpoEmail}
          </a>{" "}
          diciendo qué quieres remover. La LGPD (Ley General de Protección de
          Datos de Brasil, art. 18) garantiza ese pedido, y no te obliga a
          renunciar a la cuenta.
        </P>
      </Section>

      <Section id="alternativas" title="Quizás no necesites eliminar nada">
        <P>Si la molestia es específica, hay caminos aún más simples:</P>
        <UL>
          <LI>
            <Term>Demasiadas notificaciones:</Term> desactiva los avisos en la
            configuración del dispositivo.
          </LI>
          <LI>
            <Term>No quieres enviar tu ubicación:</Term> revoca el permiso en
            la configuración del sistema. Puedes seguir leyendo la aplicación.
          </LI>
          <LI>
            <Term>Alguien te molesta:</Term> bloquea a la persona — dejas de
            ver lo que publica.
          </LI>
        </UL>
      </Section>

      <Section id="duvidas" title="Dudas">
        <P>
          Sobre el tratamiento de datos, escribe a{" "}
          <a
            className="text-primary underline underline-offset-4"
            href={`mailto:${CONTROLLER.dpoEmail}`}
          >
            {CONTROLLER.dpoEmail}
          </a>
          . El tratamiento completo está descrito en la{" "}
          <Link className="text-primary underline underline-offset-4" href="/es/privacidade">
            política de privacidad
          </Link>
          .
        </P>
      </Section>
    </LegalPage>
  );
}
