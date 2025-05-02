// dummyData.js
export const experimentLists = [
    {
      id: 1,
      name: "실험~",
      description: "실험 1에 대한 설명",
      experiments: [
        {
          id: 11,
          question: "결혼하면 지원금 주나요?",
          answer: "얼마임",
          startTime: "2024.8.3. 오후 8:06:57",
          parameters: {
            textChunking: {
              method: "Method",
              chunkSize: "Chunk Size, Overlap"
            },
            embedding: {
              modelName: "Model Name"
            },
            llm: {
              modelName: "Model Name",
              configuration: "Configuration"
            }
          }
        },
        {
          id: 12,
          question: "주민등록등본 발급 방법",
          answer: "주민등록등본은 정부24 웹사이트에서 발급받을 수 있습니다.",
          startTime: "2024.8.3. 오후 8:10:23",
          parameters: {
            textChunking: {
              method: "Sentence",
              chunkSize: "256 tokens"
            },
            embedding: {
              modelName: "BERT-base"
            },
            llm: {
              modelName: "GPT-3.5",
              configuration: "Standard"
            }
          }
        }
      ]
    },
    { 
      id: 2, 
      name: "실험 2",
      description: "실험 2에 대한 설명",
      experiments: [
        {
          id: 21,
          question: "건강보험료 계산방법",
          answer: "소득과 재산에 따라 차등 적용됩니다.",
          startTime: "2024.8.4. 오전 10:15:00",
          parameters: {
            textChunking: {
              method: "Paragraph",
              chunkSize: "512 tokens"
            },
            embedding: {
              modelName: "KoBERT"
            },
            llm: {
              modelName: "GPT-4",
              configuration: "High precision"
            }
          }
        }
      ] 
    },
    { 
      id: 3, 
      name: "실험 3",
      description: "실험 3에 대한 설명",
      experiments: [] 
    }
  ];