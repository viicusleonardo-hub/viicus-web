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
  title: "Política de privacidad",
  description:
    "Qué datos recopila Viicus, por qué, qué queda visible para otras personas, cuánto tiempo los guardamos y cómo ejerces tus derechos.",
};

/**
 * Tradução (es) de `./pt-BR.tsx` — o texto de referência é o pt-BR; mudou lá,
 * muda aqui. Nomes de leis brasileiras ficam como são, com uma glosa curta
 * entre parênteses — o tratamento é regido pela lei do Brasil.
 */
export default function Content() {
  return (
    <LegalPage
      title="Política de privacidad"
      intro="Viicus es una aplicación donde los vecinos registran problemas de su zona y siguen lo que pasa cerca. Eso solo funciona con dos datos sensibles: dónde estás y qué escribes. Esta página explica exactamente qué hacemos con ellos."
    >
      <Section id="resumo" title="Lo esencial, en una pantalla">
        <UL>
          <LI>
            <Term>Tu ubicación va al servidor</Term> cada vez que la aplicación
            arma el feed, hace una búsqueda o verifica avisos cercanos. Es como
            sabe qué está “cerca de ti”.
          </LI>
          <LI>
            <Term>Tu nombre no aparece en los registros.</Term> Quien publica
            un incidente aparece como “Un vecino”, en el mapa, en el feed y en
            la pantalla del registro. Tu nombre visible solo aparece en los
            comentarios.
          </LI>
          <LI>
            <Term>Lo que registras es público</Term> — el texto, las fotos, la
            categoría y la ubicación aparecen en el mapa y en el feed de
            quienes están cerca.
          </LI>
          <LI>
            <Term>No vendemos tus datos</Term>, no mostramos publicidad y no
            usamos tu información para perfilado comercial.
          </LI>
          <LI>
            <Term>Puedes eliminar tu cuenta</Term> desde la propia aplicación o
            desde esta{" "}
            <Link className="text-primary underline underline-offset-4" href="/es/excluir-conta">
              página
            </Link>
            , sin tener que hablar con nadie.
          </LI>
        </UL>
      </Section>

      <Section id="controlador" title="Quién es responsable de tus datos">
        <P>
          A los efectos de la LGPD (Ley General de Protección de Datos de
          Brasil, Ley n.º 13.709/2018), el responsable del tratamiento de los
          datos en Viicus es:
        </P>
        <ControllerIdentity />
      </Section>

      <Section id="dados" title="Qué datos recopilamos">
        <P>
          Recopilamos lo mínimo que la aplicación necesita para funcionar. No
          hay registro con redes sociales, no pedimos CPF (documento fiscal
          brasileño), no pedimos documentos de identidad y no pedimos teléfono.
        </P>

        <Table
          head={["Dato", "Cuándo se recopila", "Por qué"]}
          rows={[
            [
              "Correo electrónico",
              "Al registrarte",
              "Es tu identidad de acceso y el canal para el código de verificación y los avisos de seguridad de la cuenta.",
            ],
            [
              "Nombre visible",
              "Al registrarte",
              "Te identifica en los comentarios. Tú lo eliges — no tiene que ser tu nombre civil.",
            ],
            [
              "Contraseña",
              "Al registrarte",
              "Guardada de forma cifrada. No tenemos manera de leer tu contraseña.",
            ],
            [
              "Ubicación precisa",
              "Mientras la aplicación está en uso",
              "Armar el feed por proximidad, buscar cerca, avisarte sobre alertas en tu área y posicionar el registro que publicas.",
            ],
            [
              "Fotos y videos",
              "Cuando los adjuntas a un registro",
              "Mostrar el problema. Pasan por una revisión automática antes de publicarse.",
            ],
            [
              "Texto, categoría y dirección del registro",
              "Cuando publicas",
              "Es el contenido del registro, y lo que se envía al organismo responsable.",
            ],
            [
              "Comentarios, confirmaciones y reacciones",
              "Cuando interactúas",
              "Confirmar registros y conversar sobre ellos.",
            ],
            [
              "Denuncias de contenido y bloqueos",
              "Cuando usas esas acciones",
              "Moderación y tu capacidad de no ver a alguien.",
            ],
            [
              "Plataforma y token de notificación",
              "Si autorizas las notificaciones",
              "Entregar avisos importantes a tu dispositivo.",
            ],
            [
              "Dirección IP y registros de acceso",
              "En cada solicitud",
              "Seguridad: limitar intentos de registro, contener el abuso y cumplir la guarda de registros exigida por el Marco Civil da Internet (ley brasileña de internet).",
            ],
          ]}
        />

        <P>
          <Term>No recopilamos</Term> tu agenda de contactos, tu historial de
          navegación, identificadores de publicidad ni tu ubicación en segundo
          plano — cuando la aplicación está cerrada, no sabe dónde estás.
        </P>

        <P>
          El editor de registros de la aplicación <Term>bloquea</Term> la
          publicación de CPF, teléfono y correo dentro del texto, y avisa
          cuando el relato parece señalar a una persona específica. Aun así, lo
          que escribes es tu responsabilidad: no incluyas datos de terceros.
        </P>
      </Section>

      <Section id="finalidades" title="Para qué los usamos, y con qué base legal">
        <Table
          head={["Finalidad", "Base legal (LGPD, art. 7)"]}
          rows={[
            [
              "Crear y mantener tu cuenta, autenticar tu acceso y permitirte publicar y seguir registros.",
              "Ejecución de contrato (inciso V)",
            ],
            [
              "Ordenar el feed, la búsqueda y los avisos por tu proximidad.",
              "Ejecución de contrato (inciso V)",
            ],
            [
              "Enviar los registros al organismo responsable y devolverte el avance mediante el número de seguimiento.",
              "Ejecución de contrato (inciso V)",
            ],
            [
              "Revisar el contenido antes de la publicación, moderar denuncias, aplicar límites a cuentas con historial de infracciones y contener el fraude y el abuso.",
              "Interés legítimo (inciso IX)",
            ],
            [
              "Guardar registros de acceso a la aplicación.",
              "Cumplimiento de una obligación legal (inciso II) — Marco Civil da Internet, art. 15",
            ],
            [
              "Enviar notificaciones sobre lo que pasa en tu zona.",
              "Consentimiento (inciso I), revocable en la configuración del dispositivo",
            ],
          ]}
        />
      </Section>

      <Section id="publico" title="Qué queda público">
        <P>
          Esta es la parte más importante de esta política, porque es la que
          tiene consecuencias más allá de ti.
        </P>
        <P>
          Cuando publicas un registro, aparece <Term>en el mapa y en el
          feed</Term> de quienes están cerca, con el texto, las fotos
          aprobadas, la categoría, la dirección, la ubicación y la fecha. Es lo
          que hace funcionar la aplicación: un problema que nadie ve es un
          problema que nadie resuelve.
        </P>
        <P>
          <Term>Lo que no queda público eres tú.</Term> En el mapa, en el feed
          y en la pantalla del registro, el autor aparece como “Un vecino” —
          nunca por su nombre. Tu nombre visible solo aparece en los
          comentarios, donde es conversación y no registro.
        </P>
        <P>
          <Term>Para quien no ha iniciado sesión</Term>, las coordenadas se
          redondean a unos 110 metros. La posición exacta de un registro
          permite inferir dónde vive alguien; para leer el mapa, la manzana
          basta.
        </P>
        <P>
          Los registros solo dejan de publicarse cuando violan los{" "}
          <Link className="text-primary underline underline-offset-4" href="/es/termos">
            términos de uso
          </Link>{" "}
          — contenido prohibido, datos personales de terceros, material sexual
          explícito. Fuera de eso, lo que publicas queda visible.
        </P>
        <P>
          Los registros salen del mapa y del feed según la naturaleza del
          asunto — de 12 horas para algo pasajero a 30 días para un problema
          que se queda hasta que alguien lo resuelva. Salir del mapa{" "}
          <Term>no borra</Term>: el registro sigue en tu historial, con el
          número de seguimiento, para que puedas reclamar al organismo.
        </P>
      </Section>

      <Section id="automatizado" title="Revisión automática de contenido">
        <P>
          Todo registro pasa por una revisión automática antes de publicarse, y
          los medios adjuntos también. Es lo que impide que contenido
          prohibido, datos personales de terceros o material inapropiado llegue
          al mapa.
        </P>
        <P>
          La revisión recibe solo el contenido del registro — categoría,
          dirección, texto y los medios. <Term>No recibe tu nombre, tu correo
          ni el identificador de tu cuenta.</Term>
        </P>
        <P>
          La revisión puede rechazar la publicación. Cuando eso ocurre, el
          registro <Term>no se borra</Term> y sigue en tu historial. En los
          términos del art. 20 de la LGPD, puedes pedir revisión humana de la
          decisión por el canal de contacto de esta política — y un relato
          legítimo de un problema del barrio rechazado por error es exactamente
          el caso para eso.
        </P>
      </Section>

      <Section id="compartilhamento" title="Con quién compartimos">
        <P>
          No vendemos, alquilamos ni cedemos tus datos para publicidad. El
          intercambio ocurre en tres situaciones:
        </P>
        <UL>
          <LI>
            <Term>Proveedores que operan el servicio.</Term> Empresas
            contratadas para alojar la aplicación, almacenar los medios,
            entregar correos y notificaciones y ejecutar la revisión automática
            de contenido. Tratan los datos por nuestra cuenta y orden,
            limitados a la finalidad contratada, y no pueden usarlos para fines
            propios.
          </LI>
          <LI>
            <Term>Organismos responsables.</Term> Es la razón de existir de la
            aplicación: los registros se envían al organismo competente para su
            atención, con el contenido, la ubicación y el número de
            seguimiento.
          </LI>
          <LI>
            <Term>Autoridades, mediante requerimiento legal.</Term> Atendemos
            órdenes judiciales o requerimientos de autoridad competente dentro
            de los límites de la ley.
          </LI>
        </UL>
        <P>
          Parte de esos proveedores procesa datos <Term>fuera de Brasil</Term>.
          La transferencia internacional se apoya en los supuestos del art. 33
          de la LGPD y en cláusulas contractuales con cada uno de ellos.
        </P>
      </Section>

      <Section id="retencao" title="Cuánto tiempo los guardamos">
        <UL>
          <LI>
            <Term>Datos de la cuenta:</Term> mientras la cuenta exista.
          </LI>
          <LI>
            <Term>Registros y medios:</Term> permanecen después de salir del
            mapa, porque son el historial del caso y la prueba de que acudiste
            al organismo.
          </LI>
          <LI>
            <Term>Registros rechazados en la revisión:</Term> se mantienen,
            para que puedas pedir revisión. No se publican.
          </LI>
          <LI>
            <Term>Registros de acceso a la aplicación:</Term> seis meses,
            conforme al art. 15 del Marco Civil da Internet (ley brasileña de
            internet).
          </LI>
          <LI>
            <Term>Códigos de verificación:</Term> expiran en minutos y se
            borran al eliminar la cuenta.
          </LI>
        </UL>
      </Section>

      <Section id="direitos" title="Tus derechos">
        <P>
          La LGPD (art. 18) te garantiza, sobre tus datos personales:
          confirmación del tratamiento, acceso, corrección, anonimización,
          portabilidad, eliminación, información sobre el intercambio y
          revisión de decisiones automatizadas.
        </P>
        <P>En Viicus, buena parte de eso no depende de pedírselo a nadie:</P>
        <UL>
          <LI>
            <Term>Corregir tu nombre o correo:</Term> en Cuenta, en la
            aplicación.
          </LI>
          <LI>
            <Term>Cambiar la contraseña:</Term> en Cuenta — las demás sesiones
            se cierran.
          </LI>
          <LI>
            <Term>Ver lo que publicaste:</Term> en la pestaña de incidentes,
            con el número de seguimiento de cada uno.
          </LI>
          <LI>
            <Term>Eliminar la cuenta:</Term> en Cuenta, o desde{" "}
            <Link className="text-primary underline underline-offset-4" href="/es/excluir-conta">
              esta página
            </Link>
            .
          </LI>
          <LI>
            <Term>Dejar de enviar la ubicación:</Term> revoca el permiso en la
            configuración del sistema. La aplicación sigue abriendo, pero el
            feed por proximidad deja de funcionar.
          </LI>
        </UL>
        <P>
          Para los demás pedidos, escribe a{" "}
          <a
            className="text-primary underline underline-offset-4"
            href={`mailto:${CONTROLLER.dpoEmail}`}
          >
            {CONTROLLER.dpoEmail}
          </a>
          . Respondemos en un plazo de 15 días. También puedes presentar una
          petición directamente ante la ANPD (autoridad nacional de protección
          de datos de Brasil).
        </P>
      </Section>

      <Section id="exclusao" title="Eliminación de la cuenta">
        <P>
          La eliminación borra a la persona y preserva el caso: tu correo, tu
          nombre, tu contraseña, tus sesiones, tus reacciones y tus bloqueos se
          borran, y tus comentarios dejan de mostrarse. Los registros que
          publicaste permanecen, sin dueño — ya aparecían como “Un vecino”, y
          siguen así.
        </P>
        <Callout>
          La operación es inmediata e irreversible, y el paso a paso — junto
          con la lista exacta de lo que se borra y lo que permanece — está en
          la{" "}
          <Link className="font-semibold underline underline-offset-4" href="/es/excluir-conta">
            página de eliminación de cuenta
          </Link>
          .
        </Callout>
      </Section>

      <Section id="seguranca" title="Seguridad">
        <P>
          Todo el tráfico entre la aplicación y nuestros servidores está
          cifrado, y tu contraseña se almacena cifrada — ni nosotros podemos
          leerla. El acceso administrativo a los datos es restringido y queda
          registrado.
        </P>
        <P>
          Ningún sistema es inmune. En caso de un incidente con riesgo
          relevante para tus derechos, te lo comunicaremos a ti y a la ANPD,
          como manda el art. 48 de la LGPD.
        </P>
      </Section>

      <Section id="idade" title="Edad mínima">
        <P>
          Viicus está destinado a personas de <Term>16 años o más</Term>. No
          recopilamos conscientemente datos de niños. Si identificamos una
          cuenta por debajo de esa edad, será eliminada. Los responsables que
          lo sospechen pueden escribir a{" "}
          <a
            className="text-primary underline underline-offset-4"
            href={`mailto:${CONTROLLER.dpoEmail}`}
          >
            {CONTROLLER.dpoEmail}
          </a>
          .
        </P>
      </Section>

      <Section id="alteracoes" title="Cambios en esta política">
        <P>
          Cuando esta política cambie, la fecha de actualización en la parte
          superior cambia con ella. Si el cambio afecta de forma relevante cómo
          tratamos tus datos, lo avisaremos en la aplicación antes de que entre
          en vigor.
        </P>
      </Section>
    </LegalPage>
  );
}
