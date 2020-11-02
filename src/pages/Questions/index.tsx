import React, { useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import MIIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { QuestionContainer, QuestionText, Container, AnswerText, QuestionsHeader, QuestionsHeaderText } from './styles';
import { FlatList } from 'react-native-gesture-handler';

interface QuestionProps {
  question: string;
  answer: string;
}

const QuestionsContent: QuestionProps[] = [
  {
    question: 'O que é tombamento?\n',
    answer: "A palavra tombamento originou-se do verbo tombar que - no Direito, em Portugal - tem o sentido de registrar, inventariar, arrolar e inscrever bens. O inventário era inscrito em livro próprio que era guardado na Torre do Tombo, em Lisboa. O termo passou a ser utilizado no Direito brasileiro para designar os bens registrados e tutelados pelo poder público. \n\nAssim, o tombamento é um dos dispositivos legais que o poder público federal, estadual e municipal dispõe para preservar a memória nacional. Também pode ser definido como o ato administrativo que tem por finalidade proteger - por intermédio da aplicação de leis específicas - bens de valor histórico, cultural, arquitetônico, ambiental e também de valor afetivo para a população, impedindo que venham a ser destruídos ou descaracterizados. \n\nEntre as diversas formas de proteção, o tombamento é o instrumento mais conhecido e utilizado. O tombamento de um bem cultural significa proteção integral, sendo uma das ações mais importantes relacionadas à preservação de um patrimônio de natureza material. O Iphan atua de acordo com o Decreto Lei nº 25, de 30 de novembro de 1937, na preservação e difusão dos bens culturais materiais.",
  },
  {
    question: 'O que pode ser tombado?\n',
    answer: "Em âmbito federal, que é a área de atuação do Iphan, quando se fala em tombamento é preciso deixar claro que se trata de bens materiais, móveis e imóveis. Os bens tombados não poderão ser destruídos, demolidos ou mutilados, e não poderão ser reparados, pintados ou restaurados sem a prévia autorização do Iphan. Estão sujeitos à vigilância do Iphan que poderá inspecioná-los sempre que for julgado conveniente, não podendo os respectivos proprietários ou responsáveis criar obstáculos à inspeção. \n\nA preservação desses bens, por meio do tombamento, significa o reconhecimento oficial do seu valor e do seu significado para a compreensão da história e da identidade de uma comunidade, de uma região, de um povo, de uma nação e, por vezes, da humanidade (Patrimônio Mundial). \n\nBens móveis - São as coleções arqueológicas, os acervos museológicos, documentais, bibliográficos, artísticos, arquivísticos, videográficos, fotográficos e cinematográficos. \n\nBens imóveis - São as edificações, os sítios arqueológicos e paisagísticos, bens naturais e paisagens, os núcleos urbanos e bens individuais. \n\nO conjunto de bens considerados de interesse público quer por sua vinculação a fatos memoráveis da História do Brasil, quer por seu excepcional valor arqueológico ou etnográfico, bibliográfico ou artístico, são denominados Patrimônio Histórico e Artístico Nacional. No entanto, para que um bem possa ser considerado com tal, é preciso que ele seja inscrito em um dos quatro Livros do Tombo."
  },
  {
    question: 'É possível qualquer cidadão brasileiro pedir um tombamento?\n',
    answer: "Sim. Qualquer pessoa física ou jurídica pode solicitar, aos órgãos responsáveis pela preservação, o tombamento de bens culturais e naturais, e será parte legítima para provocar, mediante proposta, a instauração do processo de tombamento. Em caso do pedido de tombamento federal, a proposta deverá ser encaminhada à Superintendência do Iphan no Estado onde o bem está localizado, à Presidência do Iphan ou mesmo ao Ministro da Cultura, em Brasília. Quando a proposta for para tombamento estadual ou municipal, o interessado deverá se dirigir ao governo estadual ou à prefeitura municipal de sua cidade. \n\nA partir dessa iniciativa, a solicitação será analisada por uma equipe técnica especializada, que verificará se o bem possui relevância no cenário nacional. Caso a resposta seja positiva, o processo irá à apreciação do Conselho Consultivo do Patrimônio Cultural que decide sobre o tombamento do bem. O processo se encerra com a homologação do Ministro da Cultura e a inscrição do bem em um dos Livros de Tombo.\n\nQualquer cidadão brasileiro pode solicitar o tombamento de bens móveis e integrados, como ocorre com os monumentos, cidades históricas, edificações e outros bens de natureza material."
  },
  {
    question: 'Quem pode efetuar um tombamento?\n',
    answer: "O tombamento pode ser feito pela União, por intermédio do Iphan, pelos governos estaduais, por meio de suas instituições responsáveis pela área, ou pelas administrações municipais, segundo leis específicas ou a legislação federal."
  },
  {
    question: 'Qual é o primeiro passo no tombamento?\n',
    answer: "O processo de tombamento se inicia no momento em que o proprietário é notificado pelo Iphan. Durante os prazos concedidos ao proprietário para impugnar o tombamento, a simples notificação será considerada como tombamento provisório, com efeito de definitivo, até a finalização do processo, que será concluído com a inscrição do bem em um dos Livros do Tombo, assim como deverá constar em livro de registro de imóveis e averbados ao lado da transcrição do domínio."
  },
  {
    question: 'Quais são as modalidades de tombamento?\n',
    answer: "Existem três maneiras de se efetuar o tombamento:\n\nDe Ofício - O tombamento incide sobre os bens pertencentes à União, aos estados e aos municípios. Essa modalidade de tombamento é feita mediante ato do administrador público em virtude do cargo que ocupa (no caso o Presidente do Iphan) e dispensa a iniciativa ou participação de terceiros, mas precisa ser submetido à apreciação do Conselho Consultivo do Patrimônio Cultural, mediante parecer, e posterior homologação do Ministro da Cultura (Decreto-Lei nº 25, de 30 de novembro de 1937, e Lei nº 6.292, de 15 de dezembro de 1975).\n\nOs tombamentos Voluntário e Compulsório incidem sobre bens de propriedade de pessoa física ou de pessoa jurídica de direito privado.\n\nVoluntário - O tombamento é feito a pedido do proprietário e quando o bem atender aos requisitos necessários para integrar o patrimônio histórico e artístico nacional a juízo do Conselho Consultivo do Patrimônio Cultural ou sempre que o proprietário concordar/anuir, por escrito, com a notificação que o Instituto lhe encaminhar quando o bem estiver para ser inscrito em um dos quatro Livros do Tombo.\n\nCompulsório - O processo de tombamento compulsório se inicia com a notificação do proprietário. Não havendo concordância com o tombamento, o proprietário terá oportunidade de contestar o ato nos termos do constante do Decreto-Lei nº 25. A decisão ficará a cargo do Conselho Consultivo do Patrimônio Cultural que, sendo favorável ao tombamento, o mesmo se dará compulsoriamente. A partir do recebimento da notificação, pelo proprietário, o bem poderá ser tombado pelo Iphan.\n\nDurante os prazos concedidos ao proprietário para impugnar o tombamento, a simples notificação será considerada como tombamento provisório - com efeito de definitivo - até que o processo seja concluído com a inscrição do bem em um dos Livros do Tombo. O tombamento deverá constar em livro de registro de imóveis e ser averbado ao lado da transcrição do domínio."
  },
  {
    question: 'O tombamento é igual à desapropriação? O bem tombado poderá ser vendido ou alugado?\n',
    answer: "Não. O bem, móvel e/ou imóvel, pertencente à pessoa física e/ou à pessoa jurídica de direito privado, objeto de tombamento, não terá sua propriedade alterada e nem precisará ser desapropriado. O importante é que o mesmo mantenha as características que possuía quando da data do seu tombamento. O proprietário, inclusive, poderá alugar ou vender o imóvel e, para tanto, o adquirente deverá notificar ao órgão responsável pelo seu tombamento sobre a alteração de propriedade para a atualização de registro.\n\nInclui-se, aqui, a mudança de propriedade decorrente de decisão judicial ou morte. Por outro lado, quando se tratar de bem tombado que pertença à União, aos estados e municípios, os mesmos somente poderão ser transferidos entre as entidades de mesma natureza, ou seja, entre aquelas pertencentes à União, aos estados e aos municípios. Feita a transferência, o adquirente deverá, no prazo de 30 dias, dar conhecimento da mesma ao Iphan.\n\nO bem objeto de tombamento não terá sua propriedade alterada e nem precisará ser desapropriado. O importante é que o mesmo mantenha as características que possuía quando da data do seu tombamento. O proprietário, inclusive, poderá alugar ou vender o imóvel e, para tanto, o adquirente deverá notificar ao órgão responsável pelo seu tombamento sobre a alteração de propriedade para a atualização de registro."
  },
  {
    question: 'Como é o processo de tombamento? Existem prazos determinados para a sua conclusão?\n',
    answer: "O tombamento é uma ação administrativa do Poder Executivo, que começa pelo pedido de abertura de processo, por iniciativa de qualquer cidadão (pessoa física ou jurídica), instituição publica ou privada. Este processo, após avaliação técnica preliminar, é submetido à deliberação dos órgãos responsáveis pela preservação. Caso seja aprovada a intenção de proteger um bem cultural ou natural, é expedida uma notificação ao seu proprietário.\n\nA partir desta notificação o bem já se encontra protegido legalmente, contra destruições ou descaracterizações, até que seja tomada a decisão final. O processo termina com a inscrição em um dos Livros do Tombo e comunicação formal aos proprietários. Decreto-Lei nº 25 e à Portaria nº 11 (anexa).\n\nNão existe um prazo determinado para a deliberação final de um processo de tombamento. Por se tratar de uma decisão importante e criteriosa, muitos estudos devem ser realizados para instrução do processo e, conforme sua complexidade, cada caso demandará prazos diferenciados. Durante o processo, os proprietários, de acordo com a Lei, têm direito a manifestação."
  },
  {
    question: 'Existe algum incentivo fiscal para proprietários de bens tombados?\n',
    answer: "Sim. No Imposto de Renda de Pessoa Física, podem ser deduzidos 80% das despesas efetuadas para restaurar, preservar e conservar bens tombados pelo Instituto do Patrimônio Histórico e Artístico Nacional. Para tanto, é necessária aprovação prévia do orçamento, pelo Iphan, e certificado posterior de que as despesas foram efetivamente realizadas e as obras executadas. Essa dedução foi limitada, em 1994, a 10% da renda tributável. No caso de pessoa jurídica, podem ser deduzidas 40% das despesas. Essa dedução foi limitada, no mesmo ano, a 2% do imposto de renda devido. Existem alguns municípios que dão incentivos fiscais específicos para conservação dos bens tombados, ou isentam seus proprietários do IPTU."
  },
  {
    question: 'Um imóvel tombado pode mudar de uso?\n',
    answer: "Sim. O que será considerado é a harmonia entre a preservação das características do edifício e as adaptações necessárias ao novo uso. Atualmente, inúmeras edificações antigas, cuja função original não mais existe, são readaptadas para uma nova utilização."
  },
  {
    question: 'Um imóvel tombado ou em processo de tombamento pode ser reformado?\n',
    answer: "Sim. Toda e qualquer obra, no entanto, deverá ser previamente aprovada pelo órgão que efetuou o tombamento. A aprovação depende do nível de preservação do bem e está sempre vinculada à necessidade de serem mantidas as características que justificaram o tombamento. A maioria dos órgãos de preservação fornece gratuitamente orientação aos interessados em executar obras de conservação, ou restauração em bens tombados."
  },
  {
    question: 'O tombamento preserva? Esta é a única forma de preservação?\n',
    answer: "Sim. O tombamento é a primeira ação de proteção e preservação dos bens culturais móveis e imóveis de valor cultural e importância histórica. Neste caso, não apenas a memória coletiva é preservada, mas todos os esforços e recursos investidos para sua construção. A preservação somente se torna visível para todos quando um bem cultural se encontra em bom estado de conservação, propiciando sua plena utilização. A preservação desses bens, por meio do tombamento, significa o reconhecimento oficial do seu valor e do seu significado para a compreensão da história e da identidade de uma comunidade, de uma região, de um povo, de uma nação e, por vezes, da Humanidade (Patrimônio Cultural Mundial).\n\nO tombamento não é a única forma de preservação. A Constituição Federal estabelece que é função da União, dos estados e municípios, com o apoio das comunidades, preservar os bens culturais e naturais brasileiros. Além do tombamento, existem outras formas de preservação. O inventário é a primeira forma para o reconhecimento da importância dos bens culturais e ambientais, por meio do registro de suas características principais.\n\nOs planos diretores também estabelecem formas de preservação do patrimônio pelos municípios, por intermédio do planejamento urbano. Os municípios devem promover o desenvolvimento das cidades sem a destruição do patrimônio. Podem, ainda, criar leis específicas que estabeleçam incentivos à preservação."
  },
  {
    question: 'O custo de uma obra de restauração ou conservação é elevado?\n',
    answer: "Restauração são as obras executadas em prédios de valor cultural, que tenham como finalidade conservar e revelar seus valores estéticos ou históricos. Uma restauração deve ter caráter excepcional, enquanto a conservação deve ser uma atividade permanente. Na maioria das vezes, o custo da conservação é semelhante ao de uma obra comum. Quando o imóvel se encontra muito deteriorado, por falta de manutenção, torna-se necessário executar intervenções de maior porte, que encarecem a obra. Outra situação é a dos prédios que contêm materiais, elementos decorativos, ou técnicas construtivas excepcionais e, nestes casos, é necessário utilizar mão de obra especializada, o que eleva o custo dos serviços. Entretanto, essas são situações raras e, geralmente, ocorrem em prédios públicos."
  },
  {
    question: 'Tombamento e inclusão na Lista do Patrimônio Mundial é a mesma coisa?\n',
    answer: "Não. É incorreto chamar de tombamento a inclusão de um bem na Lista de Patrimônio da Humanidade da Unesco. O tombamento diz respeito, especificamente, à colocação de um bem cultural sob a proteção governamental. A inclusão na lista, pela Unesco, por sua vez, consiste apenas em uma classificação e reconhecimento do valor excepcional do patrimônio em questão, nos termos da chamada Convenção do Patrimônio Mundial. O conceito de tombamento é comum em muitos países. Por exemplo, no Reino Unido é frequente a designação de Listed building, que cobre centenas de milhares de estruturas, incluindo pontes, campos e até mesmo sinais de trânsito."
  },
  {
    question: 'O tombamento de edifícios ou bairros inteiros “congela” a cidade impedindo sua modernização?\n',
    answer: "Não. A proteção do patrimônio ambiental urbano está diretamente vinculada à melhoria da qualidade de vida da população, pois a preservação da memória é uma demanda social tão importante quanto qualquer outra atendida pelo serviço público. O tombamento não tem por objetivo “congelar” a cidade. De acordo com a Constituição Federal, tombar não significa cristalizar ou perpetuar edifícios ou áreas, inviabilizando toda e qualquer obra que venha contribuir para a melhoria da cidade. Preservação e revitalização são ações que se complementam e, juntas, podem valorizar bens que se encontram deteriorados."
  },
  {
    question: 'O que é entorno do patrimônio tombado?\n',
    answer: "O entorno é a área de projeção localizada na vizinhança dos imóveis tombados, que é delimitada para preservar a ambiência do bem tombado e impedir que novos elementos obstruam ou reduzam sua visibilidade. Para delimitá-la são observados aspectos como distância, perspectiva, altura, harmonia, integração, volume, cor da edificação ou outro elemento que possa prejudicar a visão do bem tombado.\n\nOs procedimentos do Iphan para a delimitação da área de entorno se aplicam aos bens tombados em âmbito nacional. Quanto aos bens tombados pelos estados e municípios, cabe aos órgãos competentes estabelecerem - para cada tombamento - os critérios a serem observados para a proteção da visibilidade do bem, os quais poderão variar conforme a categoria, tamanho e espécie de bem.\n\nEm certos conjuntos, algumas perspectivas particularmente pitorescas devem ser preservadas. Deve-se, também, estudar as plantações e ornamentações vegetais convenientes a determinados conjuntos de monumentos para lhes conservar o caráter antigo. Recomenda-se, sobretudo, a supressão de toda publicidade, de toda presença abusiva de postes ou fios telegráficos, de toda indústria ruidosa, mesmo de altas chaminés, na vizinhança ou na proximidade dos monumentos de arte ou de história."
  },
  {
    question: 'O que pode ser construído no entorno do patrimônio tombado?\n',
    answer: ""
  },
  {
    question: 'O custo de uma obra de restauração ou conservação é elevado?\n',
    answer: "Para se construir na vizinhança do bem tombado é preciso haver prévia autorização do Iphan e a obra não poderá impedir ou reduzir a visibilidade do bem tombado, tampouco se pode instalar anúncios ou cartazes no bem tombado, sob pena de ser mandado destruir ou retirar o objeto. As coisas tombadas ficam sujeitas à vigilância permanente do Iphan, que poderá inspecioná-las sempre que for julgado conveniente, não podendo os respectivos proprietários ou responsáveis criar obstáculos à inspeção."
  },
  {
    question: 'Qual a diferença entre o tombamento de bens culturais materiais (imóveis e móveis) e o registro de bens culturais de natureza imaterial?\n',
    answer: "O registro do patrimônio imaterial é comumente confundido com o tombamento. No entanto, diferencia-se deste por considerar manifestações puramente simbólicas. Assim, não se presta a imobilizar ou impedir modificações nessa forma de patrimônio. Seu propósito é inventariar e registrar as características dos bens imateriais, de modo a manter vivas e acessíveis as tradições e suas referências culturais. No Brasil, o registro em âmbito federal foi instituído pelo Decreto n° 3.551, de 4 de agosto de 2000."
  },
  {
    question: 'Quais são os efeitos do tombamento sobre os bens móveis?\n',
    answer: "O Iphan deverá ser comunicado sempre que um bem móvel precisar ser deslocado em território nacional. O bem móvel tombado somente poderá sair do País com autorização do Iphan, por curto prazo, sem transferência de domínio, para fins de intercâmbio cultural e a juízo do Conselho Consultivo do Patrimônio Cultural.\n\nCaso haja tentativa de exportar um bem móvel tombado, o mesmo será confiscado pela União ou pelo Estado no qual ele se encontra e a pessoa incorrerá em crime de contrabando, conforme o previsto no Código Penal. Em caso de extravio ou o furto de qualquer objeto tombado, o Iphan deverá, no prazo de cinco dias, ser comunicado.\n\nOs bens imóveis (edificações, sítios arqueológicos e paisagísticos, núcleos urbanos e bens individuais) tombados não poderão ser destruídos ou mutilados, nem reparados, pintados ou restaurados sem a prévia autorização do Iphan. Estes bens ficam sujeitos à vigilância permanente do Instituto, que poderá inspecioná-los sempre que for julgado conveniente, não podendo os respectivos proprietários ou responsáveis criar obstáculos à inspeção."
  }
]

const Questions: React.FC = () => {
  const { navigate } = useNavigation();
  const [showQuestion, setShowQuestion] = useState(99999999999);

  const backToScannerHandle = useCallback(() => {
    navigate('Scanner', {
      isCommingBack: true
    });
  }, []);

  return (
    <Container>
      <Icon
        name='arrow-left'
        size={25}
        color='#202020'
        onPress={backToScannerHandle} />
      <QuestionsHeader>
        <QuestionsHeaderText>Perguntas frequentes</QuestionsHeaderText><MIIcon name='comment-question' size={30} color='#ff8616' />
      </QuestionsHeader>
      <FlatList
        data={QuestionsContent}
        renderItem={({ item, index }) => (
          <QuestionContainer key={index}>
            <QuestionText onPress={() => setShowQuestion(index)}>
              {item.question}
            </QuestionText>
            {showQuestion === index && <AnswerText>{item.answer}</AnswerText>}
          </QuestionContainer>
        )} />
    </Container>
  );
};

export default Questions;
