# Respostas para a Google Play Console

Folha de respostas para preencher o painel do app `com.viicus.app`. Cada
resposta aqui foi derivada do comportamento **real** do sistema (app Expo, API
Fastify e worker de análise), não de suposição sobre o que a loja quer ouvir.

Onde a resposta depende de uma decisão de produto e não de um fato do código,
está marcado com **[decidir]**.

As páginas públicas que o formulário exige já existem neste repositório:

| exigência | URL |
| --- | --- |
| política de privacidade | `https://viicus.com/privacidade` |
| termos de uso | `https://viicus.com/termos` |
| exclusão de conta (URL obrigatória) | `https://viicus.com/excluir-conta` |

> **O domínio é `viicus.com`, não `.com.br`.** Este documento apontava para o
> `.com.br` e as três URLs estavam mortas: o domínio está registrado no
> registro.br mas não publica registro `A` nenhum, e ainda declara MX nulo
> (`MX 0 .`, RFC 7505). Quem serve o site é a Vercel, no `.com`. URL de
> exclusão de conta que não abre é reprovação direta — a Google testa esse
> link.

> **Antes de qualquer coisa**: `src/lib/legal.ts` tem três campos vazios —
> razão social, CNPJ e endereço. Política sem controlador identificado é
> política incompleta perante a LGPD, e é a primeira coisa que uma análise
> atenta procura.

---

## 1. Data safety

### Perguntas de abertura

| pergunta | resposta | por quê |
| --- | --- | --- |
| O app coleta ou compartilha algum dos tipos de dado exigidos? | **Sim** | conta, localização e conteúdo publicado |
| Todo dado coletado é criptografado em trânsito? | **Sim** | HTTPS em toda a API e no armazenamento de mídia |
| Você oferece um jeito de o usuário pedir a exclusão dos dados? | **Sim** | in-app e pela URL de exclusão acima |

### O que declarar como "compartilhado"

A Google define *compartilhar* como transferir a terceiro, e **exclui** dessa
definição os operadores contratados (AWS, Cloudflare, Resend, OpenAI, Expo).
Por isso nenhum deles entra como compartilhamento.

O **encaminhamento ao órgão público**, porém, não é operador: é um terceiro
recebendo o dado para agir sobre ele. Cabe na exceção de "ação iniciada pelo
usuário", mas declarar é mais defensável do que omitir — e o encaminhamento é o
propósito anunciado do produto, não um efeito colateral.

**[decidir]** As linhas abaixo declaram compartilhamento para o que vai ao
órgão. Se preferir se apoiar na exceção, troque para "não compartilhado" — mas
mantenha a decisão consistente entre os quatro tipos.

### Tipos de dado

| categoria | tipo | coletado | compartilhado | obrigatório | finalidades |
| --- | --- | --- | --- | --- | --- |
| Personal info | Name | sim | não | obrigatório | Funcionalidade do app; Gerenciamento de conta |
| Personal info | Email address | sim | não | obrigatório | Funcionalidade do app; Gerenciamento de conta; Comunicações |
| Personal info | User IDs | sim | não | obrigatório | Funcionalidade do app; Gerenciamento de conta |
| Location | Approximate location | sim | **sim** | obrigatório | Funcionalidade do app |
| Location | Precise location | sim | **sim** | obrigatório | Funcionalidade do app |
| Photos and videos | Photos | sim | **sim** | opcional | Funcionalidade do app |
| Photos and videos | Videos | sim | **sim** | opcional | Funcionalidade do app |
| Messages | Other in-app messages | sim | não | opcional | Funcionalidade do app |
| App activity | Other user-generated content | sim | **sim** | obrigatório | Funcionalidade do app |
| App activity | Other actions | sim | não | opcional | Funcionalidade do app |
| Device or other IDs | Device or other IDs | sim | não | opcional | Funcionalidade do app (token de notificação) |

Notas de preenchimento:

- **Nome** é o nome de exibição, não o nome civil — mas o campo da Google é
  "Name" e é isso que ele é. Declare como coletado. Não aparece no conteúdo
  público das ocorrências — ali o autor é sempre "Um vizinho" —, só nos
  comentários. **[conferir]** antes de marcar "não compartilhado": se o nome
  congelado na ocorrência for junto no encaminhamento ao órgão, vira
  compartilhamento e a linha muda.
- **Localização precisa: sim.** O app envia latitude/longitude reais nas
  consultas de feed, busca e avisos. Declarar só "aproximada" seria falso.
- **Processado efemeramente**: não marque em nada. Tudo acima é persistido.
- **Senha** não tem tipo próprio no formulário e é guardada só como hash
  argon2id — não declare.
- **IP** também não tem tipo próprio. É usado para limite de tentativas e
  guarda legal de registros, descrito na política de privacidade.
- **Não há** SDK de analytics, de crash reporting nem de publicidade no
  projeto. Nenhuma finalidade de "Analytics" ou "Advertising" deve ser marcada.

### Práticas de segurança

- Dados criptografados em trânsito: **sim**
- Usuário pode pedir exclusão dos dados: **sim** — informe a URL de exclusão
- Revisão de segurança independente: **não**
- Compromisso com a Play Families Policy: **não se aplica** (idade mínima 16)

---

## 2. App content

### Classificação de conteúdo (IARC)

Categoria do questionário: **Social / Comunicação**.

| pergunta | resposta |
| --- | --- |
| O app permite que usuários interajam ou se comuniquem? | Sim |
| Usuários podem compartilhar conteúdo criado por eles? | Sim |
| Usuários podem compartilhar a própria localização com outros? | **Sim** — a ocorrência publicada carrega a localização |
| Há moderação do conteúdo gerado por usuários? | Sim |
| Há mecanismo de denúncia de conteúdo e de bloqueio de usuários? | Sim |
| O app contém violência, sexo, linguagem imprópria ou drogas como conteúdo do próprio app? | Não |
| Usuários podem publicar imagens que retratem acidentes, ferimentos ou danos? | Sim — com análise automática e véu para mídia sensível |

O questionário costuma perguntar sobre conteúdo **do app**, não sobre o que os
usuários podem vir a publicar; as duas últimas linhas cobrem a diferença.
Responder "não há violência" e depois o app exibir foto de acidente é o tipo de
inconsistência que gera reclassificação forçada.

Vale mencionar na descrição livre, quando houver campo: análise automática
antes da publicação, fila de moderação humana, denúncia, bloqueio e sistema de
advertências.

### Público-alvo e crianças

- Faixa etária: **16-17** e **18 e mais**. É o que a política de privacidade
  afirma (idade mínima 16); mudar aqui exige mudar lá.
- O app é direcionado a crianças? **Não**
- Isso mantém o app fora da Play Families Policy e dispensa o consentimento
  parental. Incluir a faixa 16-17 obriga a classificação de conteúdo a ser
  compatível com adolescentes — o que ela é, mas se a classificação sair
  "Adulto" as duas respostas passam a se contradizer e a Play barra.

### Demais declarações

| declaração | resposta |
| --- | --- |
| Anúncios | **Não contém anúncios** |
| App de notícias | Não |
| App de governo | **Não** — encaminhamos a órgãos, não somos órgão |
| Saúde / COVID-19 | Não |
| Empréstimo financeiro | Não |
| Rastreamento de pessoas | Não |

⚠️ Sobre "app de governo": a ficha da loja **não pode** sugerir vínculo oficial
com prefeitura ou órgão público. Frases como "canal oficial" ou brasão de
município na arte reprovam por representação enganosa.

### App access (conta de demonstração)

O app exige login para tudo além da leitura, então a Google precisa de uma
conta funcional. Preencha "All functionality is restricted" e informe:

```
Usuário: revisor@viicus.com          [criar antes de submeter]
Senha:   [definir]

Instruções:
1. Abra o app e conceda a permissão de localização quando solicitada.
2. O feed é ordenado por proximidade. Para ver conteúdo, use uma
   localização em São Paulo/SP (ex.: -23.55, -46.63) — sem isso o feed
   volta vazio, porque não há registros próximos ao local do aparelho.
3. Entre com o usuário acima.
4. Aba de registro: escolha uma categoria, descreva e envie.
```

O passo 2 não é detalhe: um revisor testando fora da área coberta vê um app
vazio e conclui que está quebrado.

**Como criar a conta, e por que ela funciona sem o código de e-mail.** O
cadastro pede um código enviado por e-mail, mas o LOGIN é e-mail + senha
(`POST /auth/login`, sem OTP). Então basta cadastrar a conta uma vez, no app
apontando para **produção**, recebendo o código no alias `revisor@viicus.com`
— dali em diante o revisor só precisa do par usuário/senha, e a caixa de
entrada deixa de estar no caminho crítico da análise.

⚠️ **A instrução do passo 2 pressupõe conteúdo em São Paulo, e hoje não há.**
`GET /feed` em produção devolve `items: []`: o banco está vazio. Um revisor
seguindo esses passos à risca vê exatamente a tela que o passo 2 promete
evitar. Semear a região de lançamento é pré-requisito da submissão, não
enfeite de lançamento.

---

## 3. Permissões sensíveis

### Localização

O app usa `ACCESS_FINE_LOCATION` e `ACCESS_COARSE_LOCATION` **apenas em primeiro
plano**. Não há permissão de segundo plano (`ACCESS_BACKGROUND_LOCATION`), o que
dispensa o formulário de declaração de localização em segundo plano — o mais
trabalhoso deles.

A divulgação em destaque exigida pela política é atendida pelo diálogo do
sistema, cujo texto está em `app.config.ts` (plugin `expo-location`).

### Fotos e vídeos

`expo-image-picker` traz `READ_EXTERNAL_STORAGE` no manifesto. Se o manifesto
final incluir `READ_MEDIA_IMAGES` ou `READ_MEDIA_VIDEO`, a Play exige a
**Photo and Video Permissions declaration** — um formulário à parte.

Isso precisa ser conferido **no artefato**, não no repositório: `android/` é
gitignorado e o EAS roda o prebuild no servidor, então o manifesto local é só
uma aproximação do que foi construído.

```bash
# Baixe o .aab do build e liste as permissões que ele realmente pede
unzip -p app.aab base/manifest/AndroidManifest.xml | strings | grep -i permission
```

---

## 4. Ficha da loja

Rascunhos para adaptar.

**Descrição curta** (máx. 80 caracteres):

```
Registre problemas do seu bairro e acompanhe o que acontece perto de você.
```

**Descrição completa**:

```
O Viicus é o jeito mais direto de registrar um problema da sua região e
acompanhar o que está acontecendo perto de você.

O QUE VOCÊ PODE FAZER

• Registrar ocorrências — buraco na via, iluminação apagada, alagamento,
  calçada quebrada, lixo acumulado, semáforo com defeito e mais.
• Acompanhar pelo protocolo. Cada registro recebe um número que é seu, para
  cobrar o órgão responsável.
• Ver o mapa da sua região com o que os vizinhos registraram por perto.
• Confirmar o que você também viu. Registros confirmados por mais pessoas
  ganham prioridade.
• Receber alertas sobre situações graves na área onde você está.

FEITO PARA RESOLVER, NÃO PARA ENGAJAR

O feed do Viicus ordena por proximidade, urgência e quanto tempo faz — nunca
por curtidas. Um buraco na sua rua importa mais que uma discussão distante, e
é assim que ele aparece.

Quem publica não fica exposto. No mapa e no feed o autor aparece como "Um
vizinho" — seu nome só aparece se você comentar.

Registros expiram sozinhos. Um acidente sai do mapa em horas; um buraco fica
até alguém resolver. Informação velha atrapalha mais do que ajuda.

PRIVACIDADE

Não exibimos anúncios, não vendemos seus dados e não usamos suas informações
para perfilamento. Você pode excluir sua conta a qualquer momento, direto no
aplicativo.

O Viicus não é serviço de emergência. Em situação de risco à vida, ligue
190, 193 ou 192.
```

O último parágrafo não é opcional num app que recebe registro de incêndio e
acidente — e a mesma frase está nos termos de uso.

**Assets ainda pendentes**: ícone 512×512, feature graphic 1024×500 e no mínimo
duas capturas de tela de telefone (a Play aceita a partir de 2, mas 4 a 8
contam a história melhor).

---

## 5. Ordem sugerida

1. Preencher razão social, CNPJ e endereço em `src/lib/legal.ts`.
2. Publicar o site com as três páginas legais no ar.
3. Criar a conta de demonstração na API de produção.
4. Data safety → App content → classificação → público-alvo.
5. Ficha da loja com os assets.
6. Subir o `.aab` no canal de teste interno e conferir a instalação num
   aparelho real.
7. Só então pedir a análise de produção.
</content>
