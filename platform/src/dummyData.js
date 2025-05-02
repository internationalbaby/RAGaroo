export const experimentLists = [
    {
        id: 1,
        name: "test-1",
        desc: "매일플러스기업통장",
        api_keys: {
                OpenAI: "sk-proj-xxx",
                Cohere: "uqBbxxx",
                Upstage: "up_OIxxx"
        },
        experiments: [
            {
                id: 11,
                question: "매일플러스기업통장의 최고 금리는 얼마야?",
                answer: "매일플러스기업통장의 최고 금리는 연 0.35%입니다.",
                startTime: "2024.10.29. 오후 14:28:37",
                parameters: {
                    textChunking: {
                        method: "RecursiveCharacterTextSplitter",
                        chunkSize: "256",
                        chunkOverlap: "32"
                    },
                    embedding: {
                        modelName: "BAAI/bge-multilingual-gemma2"
                    },
                    llm: {
                        modelName: "gpt-4o",
                        temperature: "0.3",
                        maxTokens: "1024",
                        prompt: "You are an assistant for question-answering tasks.\n\nUse the following pieces of retrieved context to answer the question. Provide an answer between one to three sentences and keep it concise. Answer only the question being asked. Write the answer in Korean.\n\ncontext: {context}\n\nquestion: {question}\n\nanswer:\n",
                    },      
                    feedback: "답변이 질문을 정확히 이해하고 매일플러스기업통장의 최고 금리를 정확하게 제공했습니다. 불필요한 내용 없이 핵심 정보를 간결하게 전달하여 우수합니다."
                },
                chunks: [
                      "/users/id_1/id_11/output_images/bbox_0.png",
                      "/users/id_1/id_11/output_images/bbox_1.png",
                      "/users/id_1/id_11/output_images/bbox_2.png",
                      "/users/id_1/id_11/output_images/bbox_3.png",
                      "/users/id_1/id_11/output_images/bbox_4.png",
                      "/users/id_1/id_11/output_images/bbox_5.png",
                      "/users/id_1/id_11/output_images/bbox_6.png",
                    ],
                chart : "/users/id_1/id_11/evaluation_scores.png"
            },
            {
                id: 12,
                question: "매일플러스기업통장의 이자 결산 기준일은 언제야?",
                answer: "매일플러스기업통장의 이자 결산 기준일은 매년 3월, 6월, 9월, 12월 넷째 토요일입니다.",
                startTime: "2024.10.29. 오후 14:30:57",
                parameters: {
                    textChunking: {
                        method: "RecursiveCharacterTextSplitter",
                        chunkSize: "512",
                        chunkOverlap: "16"
                    },
                    embedding: {
                        modelName: "BAAI/bge-multilingual-gemma2"
                    },
                    llm: {
                        modelName: "gpt-4o",
                        temperature: "0.56",
                        maxTokens: "1024",
                        prompt: "You are an assistant for question-answering tasks.\n\nUse the following pieces of retrieved context to answer the question. Provide an answer between one to three sentences and keep it concise. Answer only the question being asked. Write the answer in Korean.\n\ncontext: {context}\n\nquestion: {question}\n\nanswer:\n"
                    },
                    feedback: "답변은 질문을 정확히 이해하고 매일플러스기업통장의 이자 결산 기준일을 제공했습니다. 다만, '넷째 토요일'이라는 부분이 조금 더 명확히 설명되었으면 더 좋았을 것입니다. 불필요한 내용 없이 간결하게 전달되었습니다."
                },
                chunks: [
                    "/users/id_1/id_12/output_images/bbox_0.png",
                    "/users/id_1/id_12/output_images/bbox_1.png",
                    "/users/id_1/id_12/output_images/bbox_2.png",
                    "/users/id_1/id_12/output_images/bbox_3.png",
                    "/users/id_1/id_12/output_images/bbox_4.png",
                    "/users/id_1/id_12/output_images/bbox_5.png",
                    "/users/id_1/id_12/output_images/bbox_6.png",
                  ],
                chart : "/users/id_1/id_12/evaluation_scores.png"
            },
        ],
    },
    {
        id: 2,
        name: "test-2",
        desc: "퀵 서비스 관련",
        api_keys: {
                OpenAI: "sk-proj-xxx",
                Cohere: "uqBbxxx",
                Upstage: "up_OIxxx"
        },
        experiments: [
            {
                id: 21,
                question: "아이엠뱅크의 퀵 서비스가 뭐야?",
                answer : "아이엠뱅크의 퀵 서비스는 이용자가 간편비밀번호 등을 이용해 로그인하고, 계좌비밀번호와 일회용 비밀번호 입력 없이 간편하게 이체 및 납부를 할 수 있는 서비스입니다. \"퀵 청구\"는 청구사유와 금액을 입력해 상대방에게 청구하는 기능이며, \"퀵 납부\"는 요청받은 금액을 지정된 계좌로 이체하는 기능입니다.",
                startTime: "2024.10.29. 오후 14:32:17",
                parameters: {
                    textChunking: {
                        method: "RecursiveCharacterTextSplitter",
                        chunkSize: "256",
                        chunkOverlap: "16"
                    },
                    embedding: {
                        modelName: "BAAI/bge-multilingual-gemma2"
                    },
                    llm: {
                        modelName: "gpt-4o",
                        temperature: "0.4",
                        maxTokens: "1024",
                        prompt: "You are an assistant for question-answering tasks.\n\nUse the following pieces of retrieved context to answer the question. Provide an answer between one to three sentences and keep it concise. Answer only the question being asked. Write the answer in Korean.\n\ncontext: {context}\n\nquestion: {question}\n\nanswer:\n"
                    },
                
                    feedback: "답변은 질문에 대한 정보를 제공했지만, 추가적인 설명이 많아 간결성이 부족합니다. 핵심 정보를 간결하게 전달하면서도 불필요한 내용을 줄이는 것이 중요합니다."
                },
                chunks: [
                    "/users/id_2/id_21/output_images/bbox_0.png",
                    "/users/id_2/id_21/output_images/bbox_1.png",
                    "/users/id_2/id_21/output_images/bbox_2.png",
                    "/users/id_2/id_21/output_images/bbox_3.png",
                    "/users/id_2/id_21/output_images/bbox_4.png",
                    "/users/id_2/id_21/output_images/bbox_5.png",
                    "/users/id_2/id_21/output_images/bbox_6.png",
                  ],
                    chart : "/users/id_2/id_21/evaluation_scores.png"
            },
            {
                id: 22,
                question: "아이엠뱅크의 퀵 이체가 뭐야?",
                answer: "아이엠뱅크의 「퀵 이체」는 계좌비밀번호와 일회용 비밀번호 입력 없이 간편비밀번호 등 은행이 허용하는 수단을 이용하여 이용자의 출금 계좌에서 출금한 후 수취인의 계좌번호로 이체하는 것을 말합니다.",
                startTime: "2024.10.29. 오후 14:40:17",
                parameters: {
                    textChunking: {
                        method: "RecursiveCharacterTextSplitter",
                        chunkSize: "256",
                        chunkOverlap: "32"
                    },
                    embedding: {
                        modelName: "BAAI/bge-multilingual-gemma2"
                    },
                    llm: {
                        modelName: "gpt-4o",
                        temperature: "0.1",
                        maxTokens: "256",
                        prompt: "You are an assistant for question-answering tasks.\n\nUse the following pieces of retrieved context to answer the question. Provide an answer between one to three sentences and keep it concise. Answer only the question being asked. Write the answer in Korean.\n\ncontext: {context}\n\nquestion: {question}\n\nanswer:\n"
                    },
                    feedback: "답변은 질문에 대한 정보를 제공하고 있지만, 불필요한 내용이 많아 간결성이 떨어집니다. 핵심 정보를 더 간결하게 전달하면 좋을 것입니다. 정확성은 일부 정보가 누락되지 않고 제공되어 적절한 점수입니다."
                },
                chunks: [
                    "/users/id_2/id_22/output_images/bbox_0.png",
                    "/users/id_2/id_22/output_images/bbox_1.png",
                    "/users/id_2/id_22/output_images/bbox_2.png",
                    "/users/id_2/id_22/output_images/bbox_3.png",
                    "/users/id_2/id_22/output_images/bbox_4.png",
                    "/users/id_2/id_22/output_images/bbox_5.png",
                    "/users/id_2/id_22/output_images/bbox_6.png",
                  ],
                chart : "/users/id_2/id_22/evaluation_scores.png"
            },
        ],
    },
    {
        id: 3,
        name: "test-3",
        desc: "파랑새적금",
        api_keys: {
                OpenAI: "sk-proj-xxx",
                Cohere: "uqBbxxx",
                Upstage: "up_OIxxx"
        },
        experiments: [
            {
                id: 31,
                question: "파랑새적금의 특징을 알려줘.",
                answer : "파랑새적금은 매월 일정한 금액을 정기적으로 불입하면 만기일에 계약금액(원리금)을 지급하는 정기적금입니다.",
                startTime: "2024.10.30. 오전 10:32:00",
                parameters: {
                    textChunking: {
                        method: "CharacterTextSplitter",
                        chunkSize: "128",
                        chunkOverlap: "32"
                    },
                    embedding: {
                        modelName: "BAAI/bge-multilingual-gemma2"
                    },
                    llm: {
                        modelName: "gpt-4o",
                        temperature: "0.4",
                        maxTokens: "1024",
                        prompt: "You are an assistant for question-answering tasks.\n\nUse the following pieces of retrieved context to answer the question. Provide an answer between one to three sentences and keep it concise. Answer only the question being asked. Write the answer in Korean.\n\ncontext: {context}\n\nquestion: {question}\n\nanswer:\n"
                    },
                    feedback: "답변이 질문을 정확히 이해하고 파랑새적금의 특징을 명확하게 설명했습니다. 핵심 정보를 효율적으로 전달했지만, 조금 더 간결하게 표현할 수 있었을 것입니다."
                },
                chunks: [
                    "/users/id_3/id_31/output_images/bbox_0.png",
                    "/users/id_3/id_31/output_images/bbox_1.png",
                    "/users/id_3/id_31/output_images/bbox_2.png",
                    "/users/id_3/id_31/output_images/bbox_3.png",
                    "/users/id_3/id_31/output_images/bbox_4.png",
                    "/users/id_3/id_31/output_images/bbox_5.png",
                    "/users/id_3/id_31/output_images/bbox_6.png",
                  ],
                chart : "/users/id_3/id_31/evaluation_scores.png"
            },
            {
                id: 32,
                startTime: "2024.10.30. 오후 13:40:17",
                question: "파랑새적금의 중도해지이자율을 설명해줘.",
                answer: "파랑새적금의 중도해지이자율은 기본이자율의 10%에서 80%까지 적용되며, 이는 신규가입일 당시 고시된 예치기간별 중도해지 이자율에 따라 결정됩니다. 중도해지 시 약정한 이자율보다 낮은 이자율이 적용됩니다.",
                parameters: {
                    textChunking: {
                        method: "CharacterTextSplitter",
                        chunkSize: "256",
                        chunkOverlap: "32"
                    },
                    embedding: {
                        modelName: "BAAI/bge-multilingual-gemma2"
                    },
                    llm: {
                        modelName: "gpt-4o",
                        temperature: "0.4",
                        maxTokens: "1024",
                        prompt: "You are an assistant for question-answering tasks.\n\nUse the following pieces of retrieved context to answer the question. Provide an answer between one to three sentences and keep it concise. Answer only the question being asked. Write the answer in Korean.\n\ncontext: {context}\n\nquestion: {question}\n\nanswer:\n"
                    },
                    feedback: "답변은 질문을 일부 정확하게 이해하고 파랑새적금의 중도해지이자율에 대한 정보를 제공했습니다. 그러나 중도해지이자율이 기본이자율의 10%에서 80%까지 적용된다는 부분이 조금 혼란스러울 수 있습니다. 추가적인 설명이 필요합니다. 불필요한 내용이 없지만, 좀 더 간결하게 전달할 수 있었을 것입니다."
                },
                chunks: [
                    "/users/id_3/id_32/output_images/bbox_0.png",
                    "/users/id_3/id_32/output_images/bbox_1.png",
                    "/users/id_3/id_32/output_images/bbox_2.png",
                    "/users/id_3/id_32/output_images/bbox_3.png",
                    "/users/id_3/id_32/output_images/bbox_4.png",
                    "/users/id_3/id_32/output_images/bbox_5.png",
                    "/users/id_3/id_32/output_images/bbox_6.png",
                  ],
                chart : "/users/id_3/id_32/evaluation_scores.png"
            },
        ],
    },
    {
        id: 4,
        name: "test-4",
        desc: "전자금융 서비스 설명서",
        api_keys: {
                OpenAI: "sk-proj-xxx",
                Cohere: "uqBbxxx",
                Upstage: "up_OIxxx"
        },
        experiments: [
            {
                id: 41,
                question: "전자금융 서비스의 종류를 알려줘.",
                answer: "전자금융 서비스의 종류에는 각종 조회, 계좌이체, 현금서비스 이체, 예금신규 및 해약, 대출, 공과금납부, 사고신고, 자동이체 등록 및 해지가 포함됩니다.",

                startTime: "2024.11.01. 오후 17:20:17",
                parameters: {
                    textChunking: {
                        method: "RecursiveCharacterTextSplitter",
                        chunkSize: "512",
                        chunkOverlap: "16"
                    },
                    embedding: {
                        modelName: "BAAI/bge-multilingual-gemma2"
                    },
                    llm: {
                        modelName: "gpt-4o",
                        temperature: "0.7",
                        maxTokens: "512",
                        prompt: "You are an assistant for question-answering tasks.\n\nUse the following pieces of retrieved context to answer the question. Provide an answer between one to three sentences and keep it concise. Answer only the question being asked. Write the answer in Korean.\n\ncontext: {context}\n\nquestion: {question}\n\nanswer:\n"
                    },
                    feedback: "답변은 전자금융 서비스의 주요 종류를 포괄적으로 설명하고 있지만, 불필요한 세부 항목들이 포함되어 있어 간결성이 부족합니다. 정확한 정보를 제공하고 있지만, 핵심 정보를 간결하게 전달할 수 있도록 내용을 축소하면 더 효율적일 것입니다."
                },
                chunks: [
                    "/users/id_4/id_41/output_images/bbox_0.png",
                    "/users/id_4/id_41/output_images/bbox_1.png",
                    "/users/id_4/id_41/output_images/bbox_2.png",
                    "/users/id_4/id_41/output_images/bbox_3.png",
                    "/users/id_4/id_41/output_images/bbox_4.png",
                    "/users/id_4/id_41/output_images/bbox_5.png",
                    "/users/id_4/id_41/output_images/bbox_6.png",
                  ],
                chart : "/users/id_4/id_41/evaluation_scores.png"
            },
        ],
    },
    {
        id: 5,
        name: "test-5",
        desc: "중진공 정책자금 전용통장",
        api_keys: {
                OpenAI: "sk-proj-xxx",
                Cohere: "uqBbxxx",
                Upstage: "up_OIxxx"
        },
        experiments: [
            {
                id: 51,
                question: "중진공 정책자금 전용통장의 이자 지급시기를 알려줘.",
                answer: "중진공 정책자금 전용통장의 이자는 매년 3월, 6월, 9월, 12월 넷째 토요일에 결산되고, 결산 기준일에 이은 다음날 지급됩니다.",
                startTime: "2024.11.02. 오후 17:20:17",
                parameters: {
                    textChunking: {
                        method: "RecursiveCharacterTextSplitter",
                        chunkSize: "512",
                        chunkOverlap: "16"
                    },
                    embedding: {
                        modelName: "BAAI/bge-multilingual-gemma2"
                    },
                    llm: {
                        modelName: "gpt-4o",
                        temperature: "0.56",
                        maxTokens: "512",
                        prompt: "You are an assistant for question-answering tasks.\n\nUse the following pieces of retrieved context to answer the question. Provide an answer between one to three sentences and keep it concise. Answer only the question being asked. Write the answer in Korean.\n\ncontext: {context}\n\nquestion: {question}\n\nanswer:\n",

                    },
                    feedback: "정확성 면에서 대부분의 정보를 제공했지만, 이자 지급 시기에 대한 구체적인 날짜나 예시가 더 명확히 포함되었으면 더 좋았을 것입니다. 불필요한 내용이 없지만, 좀 더 간결하게 전달할 수 있었을 것입니다."

                },
                chunks: [
                    "/users/id_5/id_51/output_images/bbox_0.png",
                    "/users/id_5/id_51/output_images/bbox_1.png",
                    "/users/id_5/id_51/output_images/bbox_2.png",
                    "/users/id_5/id_51/output_images/bbox_3.png",
                    "/users/id_5/id_51/output_images/bbox_4.png",
                    "/users/id_5/id_51/output_images/bbox_5.png",
                    "/users/id_5/id_51/output_images/bbox_6.png",
                  ],
                chart : "/users/id_5/id_51/evaluation_scores.png"
            },
        ],
    },
    {
        id: 6,
        name: "test-6",
        desc: "chat_241104",
        api_keys: {
                OpenAI: "sk-proj-xxx",
                Cohere: "uqBbxxx",
                Upstage: "up_OIxxx"
        },
        experiments: [
            {
                id: 61,
                question: "오늘 날씨가 좋네.",
                answer : "이 질문은 은행 업무와 관련이 없습니다. 날씨에 대한 정보를 제공할 수는 없지만, 다른 은행 관련 질문이 있으시면 언제든지 말씀해 주세요.",
                startTime: "2024.11.03. 오후 12:16:17",
                parameters: {
                    textChunking: {
                        method: "RecursiveCharacterTextSplitter",
                        chunkSize: "1024",
                        chunkOverlap: "32"
                    },
                    embedding: {
                        modelName: "BAAI/bge-multilingual-gemma2"
                    },
                    llm: {
                        modelName: "gpt-4o",
                        temperature: "0.56",
                        maxTokens: "1024",
                        prompt: "You are an assistant for question-answering tasks.\n\nUse the following pieces of retrieved context to answer the question. Provide an answer between one to three sentences and keep it concise. Answer only the question being asked. Write the answer in Korean.\n\ncontext: {context}\n\nquestion: {question}\n\nanswer:\n"
                    }
                },
                chunks: [
                    "/users/id_6/id_61/output_images/bbox_0.png",
                    "/users/id_6/id_61/output_images/bbox_1.png",
                    "/users/id_6/id_61/output_images/bbox_2.png",
                    "/users/id_6/id_61/output_images/bbox_3.png",
                    "/users/id_6/id_61/output_images/bbox_4.png",
                    "/users/id_6/id_61/output_images/bbox_5.png",
                    "/users/id_6/id_61/output_images/bbox_6.png",
                  ],
                chart : "/users/id_6/id_61/evaluation_scores.png"
            },
        ],
    },
];