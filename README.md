# Spotter de datas para visto americano
Esta é uma extensão para google chrome feita com o intuito de auxiliar na busca de boas datas para a entrevista do visto americano. Atualmente, é muito normal só se conseguir datas para entrevista que são mais do que um ano na frente! Isso atrasa o plano de muita gente para tirar o visto. No entanto, de vez em quanto, algumas datas são liberadas, seja porque o consulado quer abrir mais vagas e acelerar o processo ou porque alguém desmarcou a entrevista para aquela data. O aplicante de visto é aconselhado então a ficar de olho nas datas de forma periódica para tentar remarcar para uma data melhor, caso ela surja. No entanto, esses eventos são relativamente raros e as novas vagas que aparecem são consumidas em poucos minutos. Com isso, acaba sendo muito difícil encontrar essas datas se a pessoa não dedicar um tempo exclusivo para isso. É aí que entra essa extensão!

## Como funciona
A ideia da extensão NÃO é marcar automaticamente a data para o aplicante. A proposta é ajudar a encontrar uma boa data para ser utilizada. Para isso, a extensão fica monitorando a lista de datas para um certo consulado de tempos em tempos. O usuário escolhe a última data aceitável para ele e a extensão "avisa" quando ela estiver disponível. Recebido este aviso, o usuário pode então voltar para a página de agendamento e escolher aquela nova data.

O aviso dado pela extensão é puramente visual. A ideia é que a tela de busca de datas fique aberta de forma que o usuário posse vê-la ao longo do dia. Como esta é apenas uma tela com um json dentro, correspondente às datas disponíveis, é normal que o fundo da tela seja normalmente branco. Quando a extensão encontra uma data aceitável, o fundo muda para vermelho, o que deve chamar a atenção do usuário, mesmo que ele não esteja olhando diretamente para a tela. Possuir dois monitores para deixar essa extensão aberta em um deles é aconselhável, mas você também pode dividir a tela de um monitor de forma a deixar a aba com a extensão sempre visível.

## Como instalar
Antes de iniciar este passo-a-passo, certifique-se de que a extensão está instalada e fixada na sua barra de exensões do chrome para fácil acesso. Para instalar a extensão, você vai precisar baixar/clonar os conteúdos deste repositório em uma pasta e carregar esta pasta como uma extensão não compactada. Para isso, siga os passos abaixo:

* Acesse chrome://extensions/
* No canto superior direito, ative o Modo do desenvolvedor
* Clique em Carregar sem compactação
* Encontre e selecione a pasta onde baixou/clonou este repositório (não pode ser um arquivo zip)

Pronto, com isso a extensão deve estar instalada e ativada no seu google chrome e você deve poder vê-la na sua lista de extensões com o nome "Spotter de datas para visto americano". Para fixar na barra de extensões do chrome, clique no botão de extensões do navegador próximo ao canto superior direito da janela (mesma altura da barra do navegador), encontre a extensão na lista e pressione o ícone de fixação para que ele fique azul. Agora você pode acessar a extensão pelo ícone azul escuro que parece um passaporte. Isso conclui o setup inicial da extensão. Você só vai precisar fazer isso uma vez e a extensão permanecerá instalada no seu navegador. A qualquer momento você pode desabilitá-la ou removê-la utilizando a página de extensões do chrome chrome://extensions/. Continue lendo para entender como usar esta extensão.

## Como usar
**ATENÇÃO: ISSO NÃO É UM GUIA DE COMO TIRAR O SEU VISTO AMERICANO! PROCURE INFORMAÇÕES OFICIAIS NOS SITES GOVERNAMENTAIS. ESTAS SÃO APENAS INSTRUÇÕES DE COMO USAR ESTA EXTENSÃO!**

**Certifique-se de ter lido a sessão acima "Como instalar" antes de prosseguir com este passo-a-passo**

Quando você estiver na fase de marcação da sua entrevista, você terá que criar um usuário no site oficial de informação e serviços de agendamento de vistos americanos https://ais.usvisa-info.com/pt-br/niv. É nele onde você vai fazer os seus agendamentos. Para o processo de visto não imigrante, são dois agendamentos: Entrega de documentos no CASV e entrevista no consulado. Geralmente, o grande gargalo para datas de agendamento é para a entrevista no consulado, que ocorre apenas após a entrega de documentos no CASV. Por conta disso, na tela de agendamento, você escolhe primeiro a data da entrevista no consulado e depois é dado alguns dias antes como opções de agendamento no CASV. Essa extensão foca em conseguir datas de agendamento para a entrevista no consulado apenas!

Estando logado no site de agendamentos, tendo preenchido todas as informações, método de entrega e pagamento da taxa, você vai precisar navegar até a página de agendamento em si. Como mencionado acima, nessa página você primeiro escolhe a data do agendamento do consulado para depois escolher a data de agendamento do CASV. Você vai ver um campo para selecionar em qual seção consular você vai querer fazer a entrevista e outros dois campos para escolher data e hora. Esse é o momento que você vai notar que as primeiras datas disponíveis estão muito mais para frente! De qualquer forma, eu aconselho que você escolha uma dessas datas e complete ambos os agendamentos de forma manual pelo menos uma vez, para se familiarizar com a interface. Não se preocupa, você pode remarcar quantas vezes quiser, mas o processo é o mesmo e você não vai querer descobrir como funciona a interface na correria de garantir uma boa data quando ela aparecer.

Uma vez realizado o processo, você pode voltar para a página de agendamentos e clicar no ícone da extensão na barra de fácil acesso de extensões do chrome. Vai abrir uma caixinha com alguns elementos:

* Alert if before: selecione a última data para qual você quer ser avisado de disponibilidade de agendamento. Quanto mais próxima a data, que você escolher, melhores serão as datas que você vai conseguir marcar, mas mais tempo vai levar para aparecer uma data válida.
* User ID: Isso é apenas um parâmetro numérico utilizado para buscar datas. Ele deve estar preenchido a este momento, mas se não tiver, tente recarregar a página de agendamentos e abrir esta tela novamente.
* Choose Consular Section: Este é o mesmo dropdown que aparece na página de agendamentos. Ele já deve estar preenchido com a seção que você escolheu na página de agendamentos, mas se não estiver, você pode escolher manualmente.
* Open schedule page: Este botão vai abrir a página de agendamentos para você. Ao entrar na página de agendamentos, o dropdown de seção consular já deve estar preenchido com o que estiver na janela da extensão.
* Open schedule json: Este botão vai abrir a janela de observação de datas, que nada mais é do que a API de datas para a seção consular escolhida.

Escolha uma data no primeiro campo para a extensão saber quando te avisar e clique no botão "Open schedule json" para ir para a página de observação. A partir daí é só aguardar.

Quando a extensão encontrar uma boa data disponível, o fundo da tela vai mudar para o vermelho. Observe então qual é a primeira data da lista e clique novamente no ícone da extensão. Clique no botão "Open schedule page" para retornar à página de agendamento e escolher a nova data. Pronto!

## Frequência de busca e bloqueio de sessão
Esta extensão faz a busca das datas de forma recorrente, chamando a API do site de tempos em tempos. No entanto, há uma camada de proteção na API que limita o número de chamadas permitidas por um usuário ao longo de um dia. Após esse número ser excedido, você não vai mais poder ver novas datas para agendamento nem reagendar as suas entrevistas até o dia seguinte (eu não sei exatamente quanto tempo leva para liberarem o acesso, pode ser que leve até 48h, mas sempre volta). Quando isso acontecer, na página de agendamentos você vai ver a mensagem em vermelho "Não há horários para agendamento disponíveis na localização selecionada. Por favor, tente novamente mais tarde.". Na página de observação, a API vai retornar uma lista vazia de datas disponíveis. Não há nada a fazer neste caso a não ser aguardar sua liberação automática no sistema, que deve levar de 24 a 48h.

Para extender o tempo de busca antes de bater o limite de chamadas, a extensão leva um bom tempo antes de fazer uma nova busca, entre 4.5 e 5.5 minutos. Esse tempo não é configurável por enquanto para evitar o abuso e um possível DDOS não intencional resultante de muitos usuários simultâneos.
