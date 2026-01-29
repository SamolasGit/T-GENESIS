## SOBRE O T-GENESIS

O *T-GENESIS* é um sistema avançado de simulação computacional que combina reações químicas abstratas e interações físicas baseadas em atração e repulsão com o objetivo de investigar vida artificial e comportamentos emergentes complexos.

Por meio de regras dinâmicas e parâmetros ajustáveis, o programa permite a observação do surgimento espontâneo de padrões organizados, ecossistemas artificiais e relações ecológicas não programadas explicitamente.

A aplicação é desenvolvida utilizando *JavaScript*, *HTML* e *CSS*, com uma arquitetura baseada em *cliente-servidor*. O servidor é implementado com *Node.js* e *Express*, sendo responsável por fornecer a aplicação web, gerenciar rotas e possibilitar a execução local ou remota do sistema.

Entre suas principais funcionalidades, destacam-se:

- **Geração de matrizes de afinidade** para modelar forças físicas de atração e repulsão entre diferentes espécies de partículas.
- **Utilização de energias de ativação** para controlar a ocorrência de reações químicas, permitindo simulações estocásticas realistas.
- **Formação de ecossistemas artificiais**, incluindo comportamentos como predatismo, parasitismo, simbiose e competição.
- **Criação de catálogos científicos**, que podem ser exportados e importados, possibilitando o compartilhamento de espécies e características emergentes únicas.
- **Exportação e importação de regras personalizadas**, permitindo que diferentes usuários compartilhem conjuntos completos de parâmetros e reações.
- **Ferramentas de pincel e borracha**, que possibilitam a adição e remoção manual de partículas, com controle preciso do tamanho da área de ação.
- **Configuração manual ou aleatória de reações químicas**, favorecendo tanto experimentação controlada quanto exploração criativa.
- **Configuração manual ou aleatória de afinidades físicas**, permitindo ajustes finos ou geração automática de sistemas complexos.

O *T-GENESIS* pode ser utilizado tanto como ferramenta científica e educacional quanto como plataforma de experimentação artística, funcionando como um laboratório virtual para o estudo de sistemas complexos e vida artificial.

## COMO USAR O T-GENESIS?

O **T-GENESIS** pode ser executado de duas formas:

- **Localmente**, por meio do ambiente Node.js.
- **Via navegador web**, hospedado como aplicação web em plataformas de deploy como o **Railway**, permitindo acesso remoto sem necessidade de instalação local.

---

### Execução Local (Passo a Passo)

Para executar o **T-GENESIS** localmente, siga os passos abaixo:

1. **Instale o Node.js**
   
   Certifique-se de que o Node.js está instalado em seu sistema.  
   Recomenda-se utilizar a versão LTS.

   Verifique a instalação com:
   ```bash
   node -v
   npm -v

2. **Instale o Git**

    O Git é necessário para clonar o repositório do projeto.
    Verifique se o Git já está instalado:

        git --version

    Caso não esteja, faça a instalação em:

        https://git-scm.com

3. **Obtenha o código do projeto**

    Clone o repositório utilizando Git:

        git clone https://github.com/SamolasGit/ParticleLife.git

4. **Instale as dependências**

        npm install

5. **Inicie o servidor**

        npm start
    O servidor será iniciado localmente.

6. Acesse a aplicação

    Abra o navegador e acesse

        http://localhost:3000
    A interface do T-GENESIS será carregada e a simulação estará pronta para uso.

### Execução Web (Passo a Passo)

1. **Verifique a compatibilidade do navegador**

   Certifique-se de que o seu navegador possui suporte à **WebGPU**, tecnologia utilizada pelo **T-GENESIS** para acelerar a simulação.

   Exemplos de navegadores que **não possuem suporte** ou possuem suporte **incompleto**:

   - Mozilla Firefox
   - Safari (suporte incompleto ou experimental)
   - Internet Explorer
   - Versões antigas do Microsoft Edge (Edge Legacy)

   Caso esteja utilizando um desses navegadores, recomenda-se a instalação do **Google Chrome**:

   ```text
   https://www.google.com/intl/pt-BR/chrome/

2. **Acesse a aplicação web**

Você pode encontrar o site na URL alimentado pela Railway no link abaixo

    https://particlelife-production.up.railway.app/


## MANUAL DE PARÂMETROS

Para alterar os parâmetros da simulação, o **T-GENESIS** utiliza um sistema de **barra lateral (side-bar)** que disponibiliza ao usuário um amplo conjunto de opções de customização em tempo real.  

As alterações realizadas nos controles são aplicadas diretamente à simulação, permitindo experimentação imediata e análise dos efeitos emergentes.

---

### Controles Principais

Os **controles principais** afetam o estado global da simulação e são utilizados para reinicialização e geração automática de regras.

- **Resetar Mundo**  
  Reinicializa completamente o ambiente de simulação, removendo todas as partículas ativas e reaplicando os parâmetros atualmente configurados.  
  Esse controle é útil para reiniciar experimentos mantendo as mesmas regras.

- **Random Afinidade**  
  Gera automaticamente uma nova **matriz de afinidades** entre as espécies, atribuindo valores pseudoaleatórios de atração e repulsão.  
  Esse recurso é utilizado para explorar comportamentos emergentes inesperados e testar novas dinâmicas físicas.

- **Random Reações**  
  Cria um novo conjunto de **regras de reação química** de forma aleatória, respeitando os parâmetros globais definidos pelo usuário.  
  Ideal para a geração rápida de sistemas complexos sem configuração manual detalhada.

### Configurações Predefinidas

As **Configurações Predefinidas (Presets)** permitem carregar rapidamente conjuntos previamente definidos de parâmetros da simulação. Cada preset representa um **estado completo do sistema**, facilitando a reprodução de comportamentos específicos e a comparação entre diferentes cenários.

Ao selecionar uma configuração predefinida, o **T-GENESIS** aplica automaticamente:

- A matriz de afinidades entre espécies
- O conjunto de regras de reações químicas
- Os parâmetros físicos globais da simulação
- As configurações espaciais do mundo

Esse recurso é especialmente útil para:

- Iniciar simulações a partir de estados estáveis ou interessantes
- Demonstrar comportamentos emergentes específicos
- Demonstar de forma rápida alguns estados interessantes

Recomenda-se utilizar o botão **Resetar Mundo** após a seleção de um preset para garantir que todas as alterações sejam aplicadas de forma consistente.

### Populações e Espécies

O sistema de **Populações e Espécies** define a composição fundamental da simulação no **T-GENESIS**, determinando quantos indivíduos existem no ambiente e quantos tipos distintos de partículas estão presentes.

Esses parâmetros influenciam diretamente a complexidade do sistema, a frequência de interações e o surgimento de comportamentos emergentes.

---

#### Número de Espécies

Define a quantidade total de **espécies distintas** presentes na simulação.

Cada espécie representa uma categoria única de partículas e possui:

- Identificador próprio
- Cor exclusiva para visualização
- Linha e coluna correspondentes na matriz de afinidades
- Possibilidade de participação em reações químicas específicas

O aumento do número de espécies amplia significativamente o espaço de interações possíveis, tornando o sistema mais complexo e imprevisível.

---

#### População Total

Define o número total de partículas ativas no mundo de simulação.

Esse valor afeta diretamente:

- A densidade populacional
- A quantidade de interações físicas por unidade de tempo
- A frequência de reações químicas
- O custo computacional da simulação

Populações elevadas aumentam a riqueza dos comportamentos emergentes, porém exigem maior capacidade de processamento.

---

#### Distribuição das Espécies

As partículas são distribuídas entre as espécies de forma uniforme ou conforme as regras definidas pelo sistema no momento da inicialização.

Após o início da simulação, a distribuição populacional pode se alterar dinamicamente devido a reações químicas, transformações de espécies e intervenções manuais do usuário.

---

#### Recomendações de Uso

- Utilize poucas espécies ao iniciar experimentos
- Aumente gradualmente a população para observar efeitos emergentes
- Combine populações moderadas com afinidades bem definidas para maior estabilidade
- Evite valores extremos em dispositivos com hardware limitado

### Parâmetros Físicos

Os **Parâmetros Físicos** controlam o comportamento dinâmico das partículas no **T-GENESIS**, definindo como elas se movem, interagem e respondem às forças aplicadas durante a simulação.

Esses parâmetros atuam globalmente e influenciam diretamente a estabilidade do sistema, a formação de padrões e o surgimento de comportamentos emergentes.

---

#### Temperatura

Controla a intensidade do **ruído estocástico** aplicado ao movimento das partículas.

Valores mais altos de temperatura aumentam a agitação do sistema, introduzindo movimentos mais caóticos e imprevisíveis.  
Valores mais baixos favorecem a organização e a formação de estruturas estáveis.

---

#### Atrito

Define o grau de **amortecimento** aplicado à velocidade das partículas ao longo do tempo.

O atrito reduz gradualmente a energia cinética do sistema, contribuindo para a estabilização do movimento e prevenindo aceleração excessiva.

Valores elevados resultam em movimentos mais lentos e sistemas mais estáveis, enquanto valores baixos permitem maior persistência do movimento.

---

#### Força Global (Beta)

Representa um fator de escala aplicado às forças de atração e repulsão calculadas a partir da matriz de afinidades.

Esse parâmetro controla a intensidade geral das interações físicas entre partículas, afetando diretamente:

- A força das agregações
- A separação entre espécies
- A formação de estruturas coletivas

Valores elevados amplificam as interações, podendo gerar instabilidade, enquanto valores moderados favorecem padrões organizados.

---

#### Probabilidade de Reação

Define a probabilidade global de ocorrência de uma **reação química** quando duas partículas elegíveis entram em contato dentro do raio de interação.

Valores altos aumentam a taxa de transformação entre espécies, tornando o sistema altamente dinâmico.  
Valores baixos favorecem a persistência das espécies existentes e a estabilidade do ecossistema.

---

#### Recomendações de Uso

- Ajuste a temperatura antes de modificar afinidades
- Utilize atrito moderado para evitar instabilidades numéricas
- Combine valores equilibrados de força global e probabilidade de reação
- Evite valores extremos para preservar a coerência da simulação

### Parâmetros do Mundo

Os **Parâmetros do Mundo** definem as características espaciais e os limites físicos do ambiente onde a simulação ocorre. Esses parâmetros controlam como as partículas se comportam em relação ao espaço disponível e às fronteiras do sistema.

A correta configuração desses valores é essencial para garantir estabilidade, desempenho e coerência nos comportamentos emergentes observados.

---

#### Tamanho do Mundo

Define as dimensões do espaço contínuo onde as partículas se movimentam.

Um mundo maior reduz a densidade populacional e a frequência de interações, enquanto um mundo menor concentra as partículas, aumentando colisões, forças físicas e reações químicas.

Esse parâmetro influencia diretamente:

- Densidade do sistema
- Frequência de interações
- Desempenho computacional

---

#### Raio Mínimo de Interação

Define a distância mínima entre partículas para o cálculo de forças.

Abaixo desse valor, as partículas podem ser consideradas em colisão ou sobreposição, o que pode resultar em forças intensas ou gatilhos para reações químicas.

Valores muito baixos podem causar instabilidades numéricas, enquanto valores muito altos podem impedir interações significativas.

---

#### Raio Máximo de Interação

Define o alcance máximo das forças de atração e repulsão entre partículas.

Acima desse raio, as partículas não exercem influência umas sobre as outras.  
Esse parâmetro limita o custo computacional ao restringir o número de interações avaliadas por partícula.

---

#### Tamanho da Partícula

Controla o tamanho visual das partículas no ambiente de simulação.

Esse parâmetro afeta exclusivamente a **representação gráfica**, não influenciando diretamente os cálculos físicos ou químicos do sistema.

É útil para melhorar a visualização em mundos grandes ou com alta densidade populacional.

---

#### Bordas do Mundo

Botão que permite ativar ou desativar a visualização da borda do mapa da simulação, exibida com uma coloração azulada.

Esse recurso é **puramente estético** e **não exerce qualquer influência** sobre os cálculos físicos, reações químicas ou comportamento das partículas.  
Sua função é auxiliar na orientação visual do usuário, facilitando a percepção dos limites do mundo de simulação.

---

#### Recomendações de Uso

- Utilize mundos maiores para simulações de longo prazo
- Ajuste os raios de interação para equilibrar desempenho e riqueza de comportamento
- Combine bordas toroidais com populações altas para sistemas mais homogêneos
- Evite mundos muito pequenos com alta população para prevenir instabilidade

### Ferramentas de Edição

As **Ferramentas de Edição** permitem a intervenção direta do usuário no ambiente de simulação, possibilitando a adição, remoção e modificação manual de partículas em tempo real.

Essas ferramentas são especialmente úteis para experimentos controlados, correção de estados específicos e análise detalhada de comportamentos locais dentro do sistema.

---

#### Seleção de Espécie

Permite escolher **qual espécie** será utilizada pelo pincel de inserção.

Esse controle é fundamental para criar estruturas específicas, introduzir novas espécies em um ecossistema já estabelecido ou testar interações isoladas entre espécies.

---

#### Pincel de Inserção

Ferramenta utilizada para **adicionar partículas manualmente** ao mundo de simulação.

Ao utilizar o pincel, novas partículas da espécie selecionada são inseridas na região indicada pelo cursor, respeitando os parâmetros globais definidos no sistema.

---

#### Borracha (Remoção de Partículas)

Ferramenta utilizada para **remover partículas** existentes no ambiente de simulação.

As partículas localizadas dentro da área de ação da borracha são eliminadas instantaneamente, permitindo ajustes finos na população ou a remoção de regiões específicas do sistema.

---

#### Tamanho da Ferramenta

Define o **raio de ação** tanto do pincel quanto da borracha.

Valores maiores afetam uma área mais ampla, enquanto valores menores permitem maior precisão durante a edição manual.

---

#### Recomendações de Uso

- Utilize tamanhos reduzidos para intervenções mais precisas
- Combine as ferramentas de edição com a pausa da simulação para maior controle
- Introduza novas espécies de forma gradual em sistemas estáveis
- Evite edições excessivas em simulações altamente sensíveis a perturbações

---

#### Dica Experimental

Uma forma interessante de explorar o sistema é **definir a população inicial como zero** e utilizar apenas os pincéis para construir manualmente estruturas, padrões e ecossistemas desde o início, observando como o sistema evolui a partir dessas condições iniciais.

### Gerenciar Regras

A seção **Gerenciar Regras** permite ao usuário controlar, salvar, carregar e compartilhar os conjuntos de regras que definem o comportamento do sistema no **T-GENESIS**. Essas regras incluem tanto as **afinidades físicas** quanto as **reações químicas**, além dos parâmetros globais da simulação.

Esse gerenciamento possibilita a reprodução de experimentos, a continuidade de estudos anteriores e a troca de configurações entre diferentes usuários.

---

#### Salvar Regras

Permite exportar o conjunto atual de regras da simulação para um arquivo externo.

O arquivo salvo contém:

- Matriz de afinidades entre espécies
- Regras de reações químicas
- Parâmetros físicos e espaciais
- Configurações globais da simulação

Os arquivos são gerados em formato **JSON**, facilitando a leitura, edição manual e compatibilidade entre versões.

---

#### Carregar Regras

Permite importar um arquivo de regras previamente salvo.

Ao carregar um conjunto de regras, o **T-GENESIS** aplica automaticamente todas as configurações contidas no arquivo, substituindo os parâmetros atuais.

Recomenda-se utilizar o botão **Resetar Mundo** após o carregamento para garantir que o novo conjunto de regras seja aplicado de forma consistente.

---

#### Compartilhamento de Regras

Os arquivos de regras podem ser compartilhados entre usuários, permitindo:

- Reprodução exata de simulações
- Comparação de comportamentos emergentes
- Criação de bibliotecas de regras e ecossistemas artificiais

Esse recurso fortalece o caráter colaborativo e experimental da plataforma.

---

#### Recomendações de Uso

- Nomeie os arquivos de regras de forma descritiva
- Salve versões intermediárias durante experimentos longos
- Evite misturar regras incompatíveis entre diferentes versões do sistema
- Crie uma pasta para guardar esses experimentos

### Configuração Avançada (Importante)

A **Configuração Avançada** permite o acesso direto a parâmetros internos do **T-GENESIS** que afetam profundamente o comportamento da simulação.  
Essas opções oferecem maior controle e flexibilidade, porém devem ser utilizadas com cautela, pois valores inadequados podem resultar em instabilidade, comportamentos não físicos ou degradação de desempenho.

Recomenda-se que apenas usuários com familiaridade com o funcionamento do sistema utilizem essas configurações.

---

#### Ajuste Manual de Afinidades

Permite editar diretamente os valores da **matriz de afinidades**, controlando de forma precisa as forças de atração e repulsão entre cada par de espécies.

- Valores positivos indicam atração
- Valores negativos indicam repulsão
- Valores próximos de zero resultam em interação neutra

Pequenas alterações podem gerar mudanças significativas no comportamento global do sistema.

---

#### Configuração Manual de Reações

Permite criar, editar e remover regras de **reações químicas** individualmente.

Cada reação define transformações específicas entre espécies, podendo alterar drasticamente a dinâmica populacional e o equilíbrio do ecossistema.

O uso incorreto dessas regras pode levar à extinção de espécies ou a explosões populacionais.

---

### Catálogo de Observações

O **Catálogo de Observações** é uma ferramenta destinada ao registro, organização e compartilhamento de padrões emergentes observados durante as simulações no **T-GENESIS**.

Ele permite documentar comportamentos complexos, estruturas estáveis, ecossistemas artificiais e fenômenos inesperados, funcionando como um **repositório científico de observações**.

---

#### Captura de Observações

O usuário pode capturar observações diretamente do ambiente de simulação selecionando uma região específica do mundo.

Durante a captura, o sistema registra automaticamente:

- Um recorte visual da região selecionada
- O estado atual da simulação
- Parâmetros globais ativos
- Informações populacionais e de espécies
- Frame da simulação que o evento aconteceu

Após a captura, o usuário pode *e é encorajado* a adicionar  um nome e uma descrição detalhada do fenômeno observado.

---

#### Organização do Catálogo

Cada observação é armazenada como uma entrada independente no catálogo, permitindo:

- Comparação entre diferentes padrões emergentes
- Registro histórico da evolução de uma simulação
- Documentação de experimentos bem-sucedidos

O catálogo funciona como uma biblioteca de descobertas, facilitando análises futuras e estudos comparativos.

---

#### Exportação do Catálogo

O catálogo pode ser exportado para um arquivo externo no formato **JSON**.

Esse arquivo contém todas as observações registradas, incluindo metadados e descrições, permitindo:

- Backup de experimentos
- Compartilhamento com outros usuários
- Arquivamento científico de resultados

---

#### Importação do Catálogo

Arquivos de catálogo previamente exportados podem ser importados para o **T-GENESIS**, restaurando todas as observações contidas no arquivo.

Isso possibilita a continuidade de estudos, a comparação entre diferentes sistemas e o intercâmbio de descobertas entre usuários.

---

### Documentação Recomendada para o Catálogo

Esta seção apresenta **modelos padronizados de documentação científica** para o registro de espécies, padrões emergentes e comportamentos observados no **T-GENESIS**.

A adoção desses modelos visa garantir **consistência**, **reprodutibilidade**, **clareza técnica** e **valor científico** aos registros armazenados no catálogo, permitindo análises comparativas e compartilhamento eficiente entre usuários.

---

## Modelo de Documentação de Espécies

### Identificação da Espécie

- **Nome da Espécie:**  
- **Código Interno / ID:**  
- **Classificação Funcional:** (predadora, parasita, simbiótica, neutra, etc.)

---

### Descrição Geral

Descrição qualitativa da espécie, incluindo aparência, comportamento típico e papel observado dentro do ecossistema artificial.

---

### Reações Químicas Associadas

- **Reagentes envolvidos:**  
- **Produtos gerados:**  
- **Energia de ativação:**  
- **Taxa de ocorrência:**  

---

### Comportamento Emergente Observado

Descrição dos padrões emergentes atribuídos à espécie, tais como:

- Formação de colônias
- Predação coordenada
- Parasitismo persistente
- Simbiose espontânea
- Migração coletiva

---

### Condições de Estabilidade

- Intervalo de temperatura estável  
- Dependência de densidade populacional  
- Sensibilidade a ruído estocástico  

---

### Observações Adicionais

Espaço destinado a anotações livres, hipóteses, comparações com outras espécies ou possíveis aplicações do comportamento observado.

---

### Regime Dinâmico

Um **regime dinâmico** descreve o comportamento global de um sistema ao longo do tempo, indicando como suas estruturas, interações e padrões evoluem a partir das condições iniciais.

No contexto do **T-GENESIS**, o regime dinâmico não representa um parâmetro isolado, mas sim uma **classificação observacional** do comportamento emergente resultante da interação entre partículas, afinidades, reações químicas e forças físicas.

---

#### Classificação do Regime Dinâmico

Marque o regime predominante observado:

- ☐ **Estável**  
- ☐ **Metaestável**  
- ☐ **Cíclico**  
- ☐ **Caótico Local**  
- ☐ **Caótico Global**

---

#### Regime Estável

**Definição:**  
O sistema converge para um estado organizado que se mantém consistente ao longo do tempo.

**Características:**
- Estruturas persistentes  
- Baixa variabilidade temporal  
- Resistência a pequenas perturbações  

**Exemplo:**  
Formação de colônias estáveis de partículas.

---

#### Regime Metaestável

**Definição:**  
O sistema apresenta estabilidade temporária, podendo transicionar para outro estado após perturbações internas ou externas.

**Características:**
- Estruturas duráveis porém frágeis  
- Transições súbitas ocasionais  
- Sensibilidade moderada ao ruído  

**Exemplo:**  
Ecossistemas que colapsam após longos períodos de organização.

---

#### Regime Cíclico

**Definição:**  
O sistema evolui seguindo padrões periódicos ou oscilatórios.

**Características:**
- Oscilações regulares  
- Padrões repetitivos no tempo  
- Ciclos populacionais previsíveis  

**Exemplo:**  
Dinâmica emergente de predador–presa.

---

#### Regime Caótico Local

**Definição:**  
Comportamento imprevisível restrito a regiões específicas do sistema.

**Características:**
- Instabilidade localizada  
- Coexistência de ordem e caos  
- Alta sensibilidade a condições locais  

**Exemplo:**  
Zonas turbulentas inseridas em regiões estáveis.

---

#### Regime Caótico Global

**Definição:**  
Comportamento imprevisível dominante em todo o sistema.

**Características:**
- Ausência de padrões persistentes  
- Alta entropia  
- Sensibilidade extrema às condições iniciais  

**Exemplo:**  
Simulações com temperatura elevada e baixo atrito.

## Agradecimentos

Agradeço o **Professor Tiago** pelo apoio, orientação e incentivo ao desenvolvimento deste projeto.

Sua contribuição foi fundamental, auxiliando na consolidação do **T-GENESIS** como uma ferramenta de experimentação, análise e investigação de sistemas complexos e vida artificial.

O acompanhamento crítico e as sugestões oferecidas ao longo do processo foram essenciais para elevar a qualidade geral do projeto.

---

## Licença

Este projeto é distribuído sob a licença **GNU General Public License v3 (GPLv3)**.

O texto oficial da licença encontra-se no arquivo `LICENSE`, em inglês,
conforme exigido pela Free Software Foundation.
