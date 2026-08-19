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
  title: "Términos de uso",
  description:
    "Las reglas de uso de Viicus: qué hace el servicio, qué no hace, qué puedes publicar y qué pasa cuando se rompen las reglas.",
};

/**
 * Tradução (es) de `./pt-BR.tsx` — o texto de referência é o pt-BR; mudou lá,
 * muda aqui. Nomes de leis brasileiras ficam como são, com uma glosa curta
 * entre parênteses — o serviço é regido pela lei do Brasil.
 */
export default function Content() {
  return (
    <LegalPage
      title="Términos de uso"
      intro="Al crear una cuenta en Viicus aceptas estas reglas. Existen para que la aplicación siga siendo el lugar donde un problema de tu barrio se resuelve — y no un lugar donde nada es útil ni ayuda a tu comunidad."
    >
      <Section id="emergencia" title="Viicus no es un servicio de emergencia">
        <Callout>
          <p className="font-semibold">
            En una situación de riesgo para la vida, llama de inmediato a los
            servicios de emergencia.
          </p>
          <p className="mt-3">
            En Brasil: Policía <strong>190</strong> · Bomberos{" "}
            <strong>193</strong> · SAMU (ambulancias) <strong>192</strong> ·
            Defensa Civil <strong>199</strong>
          </p>
          <p className="mt-3">
            Registrar un incidente en {PRODUCT} no envía auxilio, no es
            monitoreado en tiempo real por nadie y no sustituye la llamada a
            los servicios de emergencia.
          </p>
        </Callout>
      </Section>

      <Section id="servico" title="Qué hace el servicio">
        <P>
          {PRODUCT} permite que los vecinos registren problemas y situaciones
          de su zona, sigan lo que otras personas registraron cerca y reciban
          avisos relevantes para el área donde están.
        </P>
        <P>
          Los registros se envían al organismo responsable y recibes un número
          de seguimiento propio. <Term>Esto no es la apertura de un proceso
          administrativo formal</Term>: no controlamos la atención, el plazo ni
          la decisión del organismo, y el número de {PRODUCT} no sustituye los
          canales oficiales del municipio, de la empresa concesionaria ni de
          ningún otro responsable.
        </P>
      </Section>

      <Section id="conta" title="Tu cuenta">
        <UL>
          <LI>
            Debes tener <Term>16 años o más</Term> para crear una cuenta.
          </LI>
          <LI>
            El correo informado debe ser tuyo y estar accesible — por él llegan
            la verificación y los avisos de seguridad de la cuenta.
          </LI>
          <LI>
            Eres responsable de lo que ocurre en tu cuenta. Si sospechas de un
            acceso indebido, cambia la contraseña: eso cierra las demás
            sesiones.
          </LI>
          <LI>
            El nombre visible no tiene que ser tu nombre civil, pero no puede
            hacerse pasar por otra persona, por un organismo público ni por una
            empresa.
          </LI>
        </UL>
      </Section>

      <Section id="conteudo" title="Qué puedes publicar">
        <P>
          La regla es simple: relata <Term>un problema o una situación
          relevante</Term> para quienes viven cerca.
        </P>
        <P>No está permitido publicar:</P>
        <UL>
          <LI>
            <Term>Datos personales de terceros</Term> — CPF (documento fiscal
            brasileño), teléfono, correo, dirección de otra persona, placas de
            vehículos. El editor de la aplicación bloquea parte de esto
            automáticamente, pero la responsabilidad es de quien escribe.
          </LI>
          <LI>
            <Term>Acusaciones contra personas identificables.</Term> Describe
            la situación y el lugar, no a quien crees que es el responsable.
          </LI>
          <LI>
            <Term>Registros falsos o deliberadamente exagerados.</Term> Una
            información falsa en el mapa hace que alguien evite una calle
            tranquila o ignore un problema real.
          </LI>
          <LI>
            <Term>Contenido prohibido</Term> — material sexual explícito,
            contenido ilegal, discriminatorio o de odio, y cualquier cosa que
            exponga a personas en situación de vulnerabilidad.
          </LI>
          <LI>
            Publicidad, spam, cadenas o uso automatizado del servicio (raspado
            de datos, robots, solicitudes masivas).
          </LI>
        </UL>
        <P>
          Fotos de daños, de obstrucciones y de situaciones difíciles{" "}
          <Term>son esperadas</Term> — es la naturaleza de la aplicación. Los
          medios sensibles pueden publicarse con velo y aviso.
        </P>
        <P>
          Sigues siendo el titular de lo que publicas. Al publicar, nos
          concedes una licencia no exclusiva y gratuita para mostrar ese
          contenido en la aplicación y enviarlo al organismo responsable — que
          es exactamente lo que hace el servicio, y nada más.
        </P>
      </Section>

      <Section id="moderacao" title="Revisión, denuncias y consecuencias">
        <P>
          Todo registro pasa por una revisión automática antes de publicarse.
          Lo que cumple estos términos va al mapa y al feed; lo que no, se
          rechaza, y puedes pedir revisión humana. Los detalles están en la{" "}
          <Link className="text-primary underline underline-offset-4" href="/es/privacidade#publico">
            política de privacidad
          </Link>
          .
        </P>
        <P>
          Cualquier persona puede denunciar un contenido y bloquear a otro
          usuario. <Term>La denuncia no oculta nada automáticamente</Term>:
          prioriza la revisión humana. Ocultar contenido por volumen de
          denuncias convertiría la moderación en una disputa de mayorías, lo
          que en una aplicación de barrio es censura vecinal.
        </P>
        <P>Cuando una denuncia es aceptada, el autor recibe una advertencia:</P>
        <UL>
          <LI>
            <Term>3 advertencias en 90 días:</Term> la cuenta queda limitada a
            3 registros por día.
          </LI>
          <LI>
            <Term>6 advertencias en 90 días:</Term> la cuenta se suspende.
            Puedes seguir leyendo, cerrar sesión y eliminar la cuenta.
          </LI>
        </UL>
        <P>
          Las advertencias salen del conteo después de 90 días. Si consideras
          que una decisión fue equivocada — incluida una tomada por la revisión
          automática — escribe a{" "}
          <a
            className="text-primary underline underline-offset-4"
            href={`mailto:${CONTROLLER.email}`}
          >
            {CONTROLLER.email}
          </a>{" "}
          y pedimos revisión humana.
        </P>
      </Section>

      <Section id="disponibilidade" title="Disponibilidad y límites">
        <P>
          El servicio se ofrece gratuitamente y en el estado en que se
          encuentra. No garantizamos disponibilidad ininterrumpida, ausencia de
          fallas ni la exactitud del contenido publicado por otros usuarios —
          lo que está en el mapa es el relato de un vecino, no un informe
          técnico.
        </P>
        <P>
          No nos responsabilizamos por decisiones tomadas exclusivamente con
          base en información publicada por terceros en la aplicación. Nada de
          esto afecta los derechos que el Código de Defesa do Consumidor
          (Código de Defensa del Consumidor de Brasil) te garantiza.
        </P>
      </Section>

      <Section id="encerramento" title="Cierre de la cuenta">
        <P>
          Puedes cerrar tu cuenta cuando quieras, desde la aplicación o desde{" "}
          <Link className="text-primary underline underline-offset-4" href="/es/excluir-conta">
            esta página
          </Link>
          . Podemos suspender o cerrar cuentas que violen estos términos de
          forma grave o reiterada, comunicando el motivo.
        </P>
      </Section>

      <Section id="alteracoes" title="Cambios en estos términos">
        <P>
          Podemos modificar estos términos. Los cambios relevantes se avisan en
          la aplicación antes de entrar en vigor, y la fecha de actualización
          en la parte superior de esta página cambia con ellos. Seguir usando
          el servicio después de eso significa aceptar la nueva versión.
        </P>
      </Section>

      <Section id="lei" title="Ley aplicable">
        <P>
          Estos términos se rigen por las leyes de Brasil. Se elige el fuero
          del domicilio del usuario para resolver cualquier controversia.
        </P>
      </Section>
    </LegalPage>
  );
}
