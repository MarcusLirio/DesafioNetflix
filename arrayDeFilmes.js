
function ArrayDeFilmes(){
    let generos = [
        {
           "id":1,
           "genero":"Populares na Netflix",
           "filmes":[
              {
                 "filmeId":1,
                 "nome":"Agente Oculto",
                 "classificacaoIndicativa":12,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfCDMNW8yxRtbwDoML7w1xweQfvl9usjqq8yYm2R-Ib0MU4D53nyQqloGNIr0Gdt_NZxzti7PTRMtdWeZnKbBqogqDbRZLP1lBaYQZzkeFhj-sfZNrqG153WcdPLA9sKDWIc.jpg?r=9d9",
                 "ativo":true,
                 "dataCriacao":"2022-10-25",
                 "avaliacao":4
              },
              {
                 "filmeId":2,
                 "nome":"Dupla Jornada",
                 "classificacaoIndicativa":12,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZupNr4LgwhMchF73MoIKYC_KD3BTGtu71fssMLGylHGB2l5zMt9pvjvmm-nL2OOWYaI3cQ0HUPj3yEqK-DICmfbpiR1S631383TUZWz6imGHLHI88TH7lDR6lVtvsSecl_c.jpg?r=731",
                 "ativo":true,
                 "dataCriacao":"2022-10-26",
                 "avaliacao":5
              },
              {
                 "filmeId":3,
                 "nome":"Assalto ao Poder",
                 "classificacaoIndicativa":12,
                 'image':"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZIx-6R_reUBaoupHmaJGTTn4lsE1q2m7dMzJZ_4W7bfeSfLGx1jhh2MZK0MjWTcyY9k_IqQfQDkRU4PYqmkixpnEEoC7L0TZf4Qd1-MtVW914NsqDhDSg3go2s_lpyaH_teBJDpgsmjypBjVhFyMIiD5owBIheMDLI.webp?r=a18",
                 "ativo":true,
                 "dataCriacao":"2022-10-27",
                 "avaliacao":4
              },
              {
                 "filmeId":4,
                 "nome":"A Caçada",
                 "classificacaoIndicativa":12,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQFlUVlDwAUy1fE71Jtgi3mNHcjkkCalaeFDrJgyZgcd5aIZrBNw4fPw0gPYshPYVNlR2ez4Nq7n2lUq4tb7OWyH6zYT5Rx7Vx9pG7hGTFdKsz-35UBw-mau1zwN1ZruTFCYbaPXfgKGvI-e3o9PbBEephwfiZP9r5s.webp?r=aa8",
                 "ativo":true,
                 "dataCriacao":"2022-10-28",
                 "avaliacao":5
              },
              {
                 "filmeId":5,
                 "nome":"RRR: Revolta, Rebelião, Revolução",
                 "classificacaoIndicativa":12,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTeRXSOT6IIcXDDSTPkwq4KBHxXcjUXM84NQdDsgLJKUWH6whFoyF_3IC_gle_wgm6zsQSX-paHCLUi_PHppv4xBu5eWRgnImag.webp?r=b05",
                 "ativo":true,
                 "dataCriacao":"2022-10-29",
                 "avaliacao":3
              },
              {
                 "filmeId":6,
                 "nome":"Caçada Selvagem",
                 "classificacaoIndicativa":12,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYiPlJdHQ0KeroWMZR19jb624xPpP-dhud8i-bpIsxALm8_f2YKNvSRLbAvHb8U5hYwHsHMSWlCBiO5Jhqgy6azYyLOTJvJxJZ8.webp?r=943",
                 "ativo":true,
                 "dataCriacao":"2022-10-30",
                 "avaliacao":5
              },
              {
                 "filmeId":7,
                 "nome":"De Volta para o Futuro II",
                 "classificacaoIndicativa":12,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABc5jsPq6QT_JW6CqHbVa57odAcGyUuDnRoW64mNkTr2B8AL79G7tNqzM26v-bTTUB7z5Hovrn-AUHlm-e2cRk2ynw87xh5S16lo.webp?r=6ea",
                 "ativo":true,
                 "dataCriacao":"2022-10-31",
                 "avaliacao":5
              },
              {
                 "filmeId":8,
                 "nome":"Os Caça-Fantasmas 2",
                 "classificacaoIndicativa":12,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaw5nB28L0R_UKW4tOjk-4nOofX5gyGT3m4u3pJGxH-nxR-P437TkICdL3CujrFiGPqN3GDS7hlNdNxFcTE7fAiMc__YWiTD7pQ.webp?r=925",
                 "ativo":true,
                 "dataCriacao":"2022-11-1",
                 "avaliacao":5
              },
              {
                 "filmeId":9,
                 "nome":"Jumanji: Bem-vindo à Selva",
                 "classificacaoIndicativa":12,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVd6sTO3eZY0BSwwlMF_j-3J3bFFxUEL7uJVEpJexVWiEYbDitlB0U50Y7a5h_MZDZoNqEz8taa0udSfjJKl1N6lu0Lqj3rIEcE.webp?r=fd7",
                 "ativo":false,
                 "dataCriacao":"2022-11-2",
                 "avaliacao":5
              }
           ]
        },
        {
           "id":2,
           "genero":"Em alta",
           "filmes":[
              {
                 "filmeId":10,
                 "nome":"2012",
                 "classificacaoIndicativa":13,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXCbCktrTqbaSGo3XdLQPNPobcuUHUx9JNo8XMzOpypRk1WNFvDkuFlgTYOQUtoj4BxB65nn7WwEJbvNywa21MUkCVvMISKSMZs.webp?r=e90",
                 "ativo":true,
                 "dataCriacao":"2022-10-25",
                 "avaliacao":5
              },
              {
                 "filmeId":11,
                 "nome":"Os Piratas: Em Busca do Tesouro Perdido",
                 "classificacaoIndicativa":13,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSljXhfYIQcsqNSLR14ADxO4hYeXgUMH4ZWlX9tkAAf2XlJlbW8tKHlQe06kpVvsIdafXOjOrzCYETCAkVkiSL_S_g306qgapCnnb3wUhEEurGoGJzIc32I8vZAeRfmbanOo.jpg?r=311",
                 "ativo":true,
                 "dataCriacao":"2022-10-26",
                 "avaliacao":5
              },
              {
                 "filmeId":12,
                 "nome":"Enola Holmes",
                 "classificacaoIndicativa":13,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfHVbEKfXtq0zlSJAxG6-kL8z66qu2Ol5wBV0swpUSZXoQgziqm_ITcC15iX0vASTw7B4UuQ0ZJ1fyzAP3fKxpgRG8iWrWuOmIl1YrSGR9lNqglZxUu38fbq-KTShs48xBma.jpg?r=70d",
                 "ativo":true,
                 "dataCriacao":"2022-10-27",
                 "avaliacao":4
              },
              {
                 "filmeId":13,
                 "nome":"O Protetor",
                 "classificacaoIndicativa":13,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABduD0JAvokJV_0NrXFoOk4C2DlQLxHF5F5ftpgSN-qS7iBJcz597eEFps7dKgl-cchFEm0ulSv1SCcaHgH0l6Me2d7yG_wl9JCY.webp?r=1f1",
                 "ativo":true,
                 "dataCriacao":"2022-10-28",
                 "avaliacao":5
              },
              {
                 "filmeId":14,
                 "nome":"Fullmetal Alchemist: A Alquimia Final",
                 "classificacaoIndicativa":13,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUVWOpHgU14EDf_jn8Xd1SIsiaBv4lDWDtEbodeA4qw1Tk_0cy1u8Uur2cj_Fjziz87Guyx6LUSRLTTBHIDmY3FAU-8pprWesLWYbvqfJQruRHSTQy-GA2bPcxpuaWo--roO.jpg?r=e1d",
                 "ativo":true,
                 "dataCriacao":"2022-10-29",
                 "avaliacao":3
              },
              {
                 "filmeId":15,
                 "nome":"O Retorno da Múmia",
                 "classificacaoIndicativa":13,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcwH4T7bVsNw3ZcNQCVmQ6IaKdSwKVF2BFBA11GAFb9gPtz2I7WNKkkX5aJtms6GOmRQ97Vfovo8h1sbzBEl_bKnrVAmWSVQKZk.webp?r=e3d",
                 "ativo":true,
                 "dataCriacao":"2022-10-30",
                 "avaliacao":5
              },
              {
                 "filmeId":16,
                 "nome":"Alerta Vermelho",
                 "classificacaoIndicativa":13,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABd5ZukO3cCEn1z1FHK_3ZM8GDyc_F-r6z4M2OkPptKq06AUKQAIw8_xwPGDpa1DmBdOuMOftoypUWbzkKGefAv25QmNFMcQ8Gq5Vr11XiuxmPV7fj5RTytdVYDc92q2Oa7ZF.jpg?r=202",
                 "ativo":true,
                 "dataCriacao":"2022-10-31",
                 "avaliacao":5
              },
              {
                 "filmeId":17,
                 "nome":"A Múmia",
                 "classificacaoIndicativa":13,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbcfvlP27lARiz1MC3H30CDr4uYEue3RETU-vrNgebsbIMh1zjOPT39XT1AoxmxV4ziySzKjk49B4JoViOMu7fWs5eP_a8emBNc.webp?r=373",
                 "ativo":true,
                 "dataCriacao":"2022-11-1",
                 "avaliacao":5
              },
              {
                 "filmeId":18,
                 "nome":"A Serpente Verde",
                 "classificacaoIndicativa":13,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfy4jKj8Cr9o-Wm-rVLhF5BI_YIlZm4ljG6vhgxnzJn41PR0-LoIo2-FRum8PggrKmBvJ1qNPT3zZ073lCUx5zmZDlCGt8ZYjh5Vbpp0k_T4fGp6r-Z67Dx5d7qtg1BgDNu_.jpg?r=e7c",
                 "ativo":true,
                 "dataCriacao":"2022-11-2",
                 "avaliacao":5
              }
           ]
        },
        {
           "id":3,
           "genero":"Assistir novamente",
           "filmes":[
              {
                 "filmeId":19,
                 "nome":"The Old Guard",
                 "classificacaoIndicativa":14,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU_7W3gE41zhkXJ5ySeilAwuNnCWn01lIT9X7N3sg2oYHk1a94IkKgQ4CWq-5p3nJpWUhNZwfjw_IrOZp3BsnXDrloXvhXtodm78G8Wk_uKXGwrStZTrHUtV79m4HnnoY_MP.jpg?r=c52",
                 "ativo":false,
                 "dataCriacao":"2022-10-25",
                 "avaliacao":5
              },
              {
                 "filmeId":20,
                 "nome":"O Projeto Adam",
                 "classificacaoIndicativa":14,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbeAZHiQ0ICWlnSAnSLinUeWlk4zHsH36YAHVUgXso7RVI5FkcNOl9rl32vDcKfp3GsNBRsyn47iWZ1SFWjnmyurSWds3D-dHyuKCRUebxALkdOgGwe-3s36aVoX9KdGs1bH.jpg?r=806",
                 "ativo":true,
                 "dataCriacao":"2022-10-26",
                 "avaliacao":5
              },
              {
                 "filmeId":21,
                 "nome":"Homem-Aranha: De Volta ao Lar",
                 "classificacaoIndicativa":14,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRZSfc8yFi1m4MQxfOSxR5gy--pai3QvTaa5if-z0kuFjaNy6DRf7F3j0NLrcr-qeBua3gZEWH4DKac3KUHio0po33MfiApQIPg.webp?r=3b7",
                 "ativo":true,
                 "dataCriacao":"2022-10-27",
                 "avaliacao":5
              },
              {
                 "filmeId":22,
                 "nome":"O Contador",
                 "classificacaoIndicativa":14,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUNSnGHnWz2QtjGCjR9ADcnTq9zH44mTm0epCuGr5kQGVgpTlW234nCsyF-VaAPEZAv9mNjN0YSOOKR9LWqRYI82dCpmzoIO7es.webp?r=fd3",
                 "ativo":true,
                 "dataCriacao":"2022-10-28",
                 "avaliacao":5
              },
              {
                 "filmeId":23,
                 "nome":"Projeto Gemini",
                 "classificacaoIndicativa":14,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABY_F6iGR_BMtEAZOajlRFGiWjo3he2e7fqomZHsnxZoQo1y81CAk3g1AUwNBj32tm75Z_agfmX_Mm6miReospPhjqJ4KepWPObc.webp?r=b09",
                 "ativo":false,
                 "dataCriacao":"2022-10-29",
                 "avaliacao":3
              },
              {
                 "filmeId":24,
                 "nome":"A Múmia",
                 "classificacaoIndicativa":14,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABX-HUsnNm63tRK6N0sHeuakBa3dqAPhAhn3nkOPnyypUS30HAc9ZFE77mRmXd2Iye9cMctGUD6rZmOoMj1F2JXAJxrCu42oeavo.webp?r=0e5",
                 "ativo":true,
                 "dataCriacao":"2022-10-30",
                 "avaliacao":5
              },
              {
                 "filmeId":25,
                 "nome":"O Último Caçador de Bruxas",
                 "classificacaoIndicativa":14,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTN_Mn91FTqhl_3-tPG-zN9e6lykg1sr2sqB3LVTtQq8H8bYC0p2CVl5hwJLpFOMVINAyZD2QlmShBIHYX5oF0CjbCQg_SSKzFg.webp?r=0ec",
                 "ativo":true,
                 "dataCriacao":"2022-10-31",
                 "avaliacao":5
              },
              {
                 "filmeId":26,
                 "nome":"Instinto Assassino",
                 "classificacaoIndicativa":14,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZl1jBXox2KUPToaaHapguMuAXwi0J50GXsFegxnuEP5aXVq9SzSyos26zuqtElvT_4vk0SBikTL3G092egvVm0wE2tcsFfz0B2mbpR3wCOva9inpUQe9bd0BtWOpbOrbNTW.jpg?r=c2f",
                 "ativo":false,
                 "dataCriacao":"2022-11-1",
                 "avaliacao":5
              },
              {
                 "filmeId":27,
                 "nome":"Operação Fronteira",
                 "classificacaoIndicativa":14,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeS9cMowNIP8WqjyfRleScT_3FM_boJCLVnQhIJqnKWYtLQq3LhBvZ5yIYrkgsvez6RBSXuHHV78WXRMVL2gPUd2wXSIntdyHDSH0Q69kecpg3sMHx4XNeauIbNO-mWNOK_2.jpg?r=0f8",
                 "ativo":true,
                 "dataCriacao":"2022-11-2",
                 "avaliacao":5
              }
           ]
        },
        {
           "id":4,
           "genero":"Anime",
           "filmes":[
              {
                 "filmeId":28,
                 "nome":"One Piece: Z",
                 "classificacaoIndicativa":15,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYxlxstHFYRJiSR7RMiHXwtVFFVdrSKYKIgrivil6W0hUc65c1JKwYeKXKuCS7ylozXg6B9nQxSB2Yim5NmRJ1YJj516T1cKhYI.webp?r=ccd",
                 "ativo":true,
                 "dataCriacao":"2022-10-25",
                 "avaliacao":5
              },
              {
                 "filmeId":29,
                 "nome":"Drifting Home",
                 "classificacaoIndicativa":15,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTXSdrsVwKu7V8_C0ghCYDNuS2LfXPfwOq1I-K4NqTZCqf3gzMsSrBDuKCZJ_L7kGH-ATI-lqHr6VduOSvLaxfCbnKWZeMY0ezdOj9w8_VrgY-Fv1gu0v2O2tzChsgJKbnD6.jpg?r=a4c",
                 "ativo":true,
                 "dataCriacao":"2022-10-26",
                 "avaliacao":5
              },
              {
                 "filmeId":30,
                 "nome":"Princesa Mononoke",
                 "classificacaoIndicativa":15,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdfobhfdOWdcF_iqX9GomMf3IwwYVUQNRZo-QBeeKjna-9gkvBOpIEKei_ATNlahJARAZBjuElLxBqlRfeZ1aITq4KOSUGQa9zo.webp?r=737",
                 "ativo":false,
                 "dataCriacao":"2022-10-27",
                 "avaliacao":5
              },
              {
                 "filmeId":31,
                 "nome":"One Piece: Strong World",
                 "classificacaoIndicativa":15,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYPGVMNT9PJr_b7Un0RmEpW5urDEzmCgYp7O1J-f2KvRBO6mZ5FQb8i4rOuwxmzIAumqwSP1r7AYUpyRqVixJT-pCBBTfCub9yE.webp?r=d88",
                 "ativo":true,
                 "dataCriacao":"2022-10-28",
                 "avaliacao":5
              },
              {
                 "filmeId":32,
                 "nome":"The Witcher: Lenda do Lobo",
                 "classificacaoIndicativa":15,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABT-r5lOqN23VFapa_DgBuznC8_DiAIhy8HfeeisyKBLtPNRKRoziUMDoZwpl5YotWAOvVwfixXw0HG_4OpcT6VLwbFaZjaXzI7SNLLsCJxaNJhIsmvX49h5Ck-MinFBI9wmB.jpg?r=f7d",
                 "ativo":false,
                 "dataCriacao":"2022-10-29",
                 "avaliacao":5
              },
              {
                 "filmeId":33,
                 "nome":"My Hero Academia: 2 Heróis",
                 "classificacaoIndicativa":15,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVWpS_8e75PCfWQdphDtaPXqFsuD8B6Gt1prdKafaEC-U5SZr-eQT6dljqd82uPE5pHIeMr2IiR7rlbKafE6uWZT0788a2Arbww.webp?r=d21",
                 "ativo":true,
                 "dataCriacao":"2022-10-30",
                 "avaliacao":3
              },
              {
                 "filmeId":34,
                 "nome":"My Hero Academia: O Filme - Ascensão dos Heróis",
                 "classificacaoIndicativa":15,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdm_HFQNNYcy0uW0Lh40A8dhjyDgOgIF19s1GUjOtBPSKfP6IZh6xYERQTAADXo-Fl71xj45FNnkfn-M0ZcJ2kNvVw_-Sz92vWM.webp?r=bae",
                 "ativo":true,
                 "dataCriacao":"2022-10-31",
                 "avaliacao":3
              },
              {
                 "filmeId":35,
                 "nome":"The Seven Deadly Sins: Cursed by Light",
                 "classificacaoIndicativa":15,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABezRWGtm3ul0HI5O78Gf-W0dMl736UM1oBvJC2Qu0U-d3UZk28ItIgHbaJyhqOx1bIZD4RdC5wwJuHR_XTBpN6Tsv7Z4OqHVEupYlkJYdBadpzEPGfHsi53pKxPMqxB0aq9o.jpg?r=5ef",
                 "ativo":false,
                 "dataCriacao":"2022-11-1",
                 "avaliacao":5
              },
              {
                 "filmeId":36,
                 "nome":"Mobile Suit Gundam II: Soldados da Desolação",
                 "classificacaoIndicativa":15,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZ7uzyC23YBaPxepMO-G8CiXZJ_HTx7TnaIB-44ZspSVnNq-dwA3Jv4DQHgmOzDuVBR-zajly3r4l9fWKHYSdVflnPeIAY-rCBE.webp?r=f0f",
                 "ativo":true,
                 "dataCriacao":"2022-11-2",
                 "avaliacao":3
              }
           ]
        },
        {
           "id":5,
           "genero":"Comédia",
           "filmes":[
              {
                 "filmeId":37,
                 "nome":"De Volta para o Futuro II",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABc5jsPq6QT_JW6CqHbVa57odAcGyUuDnRoW64mNkTr2B8AL79G7tNqzM26v-bTTUB7z5Hovrn-AUHlm-e2cRk2ynw87xh5S16lo.webp?r=6ea",
                 "ativo":true,
                 "dataCriacao":"2022-10-25",
                 "avaliacao":5
              },
              {
                 "filmeId":38,
                 "nome":"Os Caça-Fantasmas 2",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaw5nB28L0R_UKW4tOjk-4nOofX5gyGT3m4u3pJGxH-nxR-P437TkICdL3CujrFiGPqN3GDS7hlNdNxFcTE7fAiMc__YWiTD7pQ.webp?r=925",
                 "ativo":true,
                 "dataCriacao":"2022-10-26",
                 "avaliacao":5
              },
              {
                 "filmeId":39,
                 "nome":"O Homem de Toronto",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABT2lAcPS0qOp_rDARlioUIEOHb5mbKMYZQLNRMWkS1BPQhuRf0_Fbm-Kn1WHxwvkrCK98nyJOpSLhiA9ysLpyt6A92mKT6OdH36LnL3ZZa3nUlZAjBqzpbjasW_4c-QKiWa4.jpg?r=a89",
                 "ativo":true,
                 "dataCriacao":"2022-10-27",
                 "avaliacao":5
              },
              {
                 "filmeId":40,
                 "nome":"Alerta Vermelho",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABd5ZukO3cCEn1z1FHK_3ZM8GDyc_F-r6z4M2OkPptKq06AUKQAIw8_xwPGDpa1DmBdOuMOftoypUWbzkKGefAv25QmNFMcQ8Gq5Vr11XiuxmPV7fj5RTytdVYDc92q2Oa7ZF.jpg?r=202",
                 "ativo":true,
                 "dataCriacao":"2022-10-28",
                 "avaliacao":5
              },
              {
                 "filmeId":41,
                 "nome":"Kung-fusão",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZQnU5bdXrSa8JDw6BJtEal8WERYjWbqZrz9dyjG-XXsVB6R1fwN5qygZRC1qGcINSxpoM7PVgatrSP7AdTBF-xWDjLQV2oVl74.webp?r=885",
                 "ativo":true,
                 "dataCriacao":"2022-10-29",
                 "avaliacao":5
              },
              {
                 "filmeId":42,
                 "nome":"De Volta para o Futuro III",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZn3OdDuQm58d1qCypj2QYiLEiA6hXEVXitwEvS_8KCskviYZSh-5kXUEX7l5fp61wXx5n-6koDtORAit1jWWMnhFzqiHHajGfg.webp?r=e7d",
                 "ativo":true,
                 "dataCriacao":"2022-10-30",
                 "avaliacao":5
              },
              {
                 "filmeId":43,
                 "nome":"De Volta para o Futuro",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUAwzAew1ksdQrx9ZxJv-S_eU7NP7DD1l9_Tne2l4Vc2XVbxS7dguxXuw5nxzAfvaRPNBIKItsB49mJtKWGpCsAdkbS28cm8IfQ.webp?r=2fe",
                 "ativo":true,
                 "dataCriacao":"2022-10-31",
                 "avaliacao":5
              },
              {
                 "filmeId":44,
                 "nome":"MIB: Homens de Preto - Internacional",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABazm0yrkhca2t5rIyx06S6lYjUQ0Cqxcc6GLzNjA6O6rC-7j8Oj4-IrJxt5fkn9I2tM-FDoY_GmlX1dGvYW5PzBjBo61V-mGc_Y.webp?r=e9b",
                 "ativo":true,
                 "dataCriacao":"2022-11-1",
                 "avaliacao":3
              },
              {
                 "filmeId":45,
                 "nome":"Troco em Dobro",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSldLmYRE1vqvfJEp7jZf2dEuFqrvzrwTOHa8bn_2Sc4NIgB0ToHvtOFzZo5nb49GSSxInCvVS_FrZFm-tRQSXa2ghnrqt3XIkH9jdt3hVyQYWvFkhsRQlS8LSB8QoHve8dp.jpg?r=dba",
                 "ativo":false,
                 "dataCriacao":"2022-11-2",
                 "avaliacao":5
              }
           ]
        },
        {
           "id":6,
           "genero":"Suspenses de ação sobre corrida contra o tempo",
           "filmes":[
              {
                 "filmeId":46,
                 "nome":"O inferno de Dante",
                 "classificacaoIndicativa":17,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABX_NLiDDX6t6iulR2h9GdfhJkOxP5TGHfSNfZ5E2U8nLAt4BG5VN0DLeWz0gZ7F4xaxfU1Vq7ttdeZwXpPP5jPN7ozLRvEplpTE.webp?r=7b9",
                 "ativo":true,
                 "dataCriacao":"2022-10-25",
                 "avaliacao":5
              },
              {
                 "filmeId":47,
                 "nome":"Interceptor",
                 "classificacaoIndicativa":17,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQWJSpaXejaYcUUxlWKAMJB7tPZVU8xd0idrDGeufFe4WJgH5bjistF5qa7rA-4ccxZV1u7yclgqS3KEtZbUNmB6MOAkRZkNsACIdqYa4cI0xTTsJFjYDUTzSH142k47So66.jpg?r=921",
                 "ativo":false,
                 "dataCriacao":"2022-10-26",
                 "avaliacao":5
              },
              {
                 "filmeId":48,
                 "nome":"Hanna",
                 "classificacaoIndicativa":17,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcYb_9IGgmJrlR3PpNN9i6dIbQVpXLdn3hHqxtkrvUyBM9aMR37nHnThQtg-f54T-pCRPD3B1fKRCbEr084earHgKlGZ7C-5D7E.webp?r=d52",
                 "ativo":true,
                 "dataCriacao":"2022-10-27",
                 "avaliacao":5
              },
              {
                 "filmeId":49,
                 "nome":"O Núcleo - Missão ao Centro da Terra",
                 "classificacaoIndicativa":17,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQdT4p-5WGMPQes03MpGJ-IoSpKj9gp_6OON3I1RH1w1Pazvif6fRRjyg7u7HbjKkhLOL_A3ZRPUAQ5VkrjNb3L9tg8t_gHWbjg.webp?r=7be",
                 "ativo":true,
                 "dataCriacao":"2022-10-28",
                 "avaliacao":5
              },
              {
                 "filmeId":50,
                 "nome":"No Limite do Amanhã",
                 "classificacaoIndicativa":17,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABY88tJ5dYPiNvXZF90GQFQQ9JfALfi424WPlDm7tp9CXMO_IadmOht7btnKWNt5RKKVTUwRDtEuQ2_itCMb7KSEI5gQPuhRJ_ww.webp?r=edb",
                 "ativo":true,
                 "dataCriacao":"2022-10-29",
                 "avaliacao":5
              },
              {
                 "filmeId":51,
                 "nome":"A soma de todos os medos",
                 "classificacaoIndicativa":17,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeV0D2E5bnfa3qJHGkdMKVXdp6lqHFE1E_Uu3dYXHanli9xDbSRQOaRFz1IYOT4Pyws9vIEkPpHV63C7Mm2CV_DPZu9AOLlbRhQ.webp?r=906",
                 "ativo":true,
                 "dataCriacao":"2022-10-30",
                 "avaliacao":5
              },
              {
                 "filmeId":52,
                 "nome":"Carter",
                 "classificacaoIndicativa":17,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVlT5W5oMQnGolDaVnWbmWFhOQ9mScJiGbFBSIf8QGcGoOiOFESG37ymtztZSKQ-pDDndU_MgQD-gNCDZCnQTITNV5AHwSYUrFp5WVzXecZUaGl3i_VawZ9kwQ6PSw0RGFSw.jpg?r=896",
                 "ativo":true,
                 "dataCriacao":"2022-10-31",
                 "avaliacao":5
              },
              {
                 "filmeId":53,
                 "nome":"Lucy",
                 "classificacaoIndicativa":17,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABROFqAo7-c7td0bZCGAg1mQL6nom6fEZ6Blq-_swnbr204WuUhYUo9hhrv5d5kTyuX3ZaxlP6tTJH9MbnN7TUuvPfhduXNuqYjI.webp?r=44f",
                 "ativo":true,
                 "dataCriacao":"2022-11-1",
                 "avaliacao":5
              },
              {
                 "filmeId":54,
                 "nome":"Anomalia – Corrida Contra a Vida",
                 "classificacaoIndicativa":17,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYf_L7x79cH_Oy6L2W22mhJXGjEd0UQ1OcjgDgqpr9TcXmI0-_i7RwHZ1A6HlYSxEWHQ3FTgHseA1KU92daUx6pJnnzhDIkrdBg.webp?r=e90",
                 "ativo":true,
                 "dataCriacao":"2022-11-2",
                 "avaliacao":5
              }
           ]
        },
        {
           "id":7,
           "genero":"Dramas",
           "filmes":[
              {
                 "filmeId":55,
                 "nome":"Top Gun - Ases Indomáveis",
                 "classificacaoIndicativa":18,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQVm2XhVh_9fXSzQm6BPYk8ORC4tUHh8i23NZk0Xk56arLAE9MHsddRjzRCjQhtYP9kcV48JunpiEtKoGrPaO4Z8kltI8bQi9Mk.webp?r=8b7",
                 "ativo":false,
                 "dataCriacao":"2022-10-25",
                 "avaliacao":5
              },
              {
                 "filmeId":56,
                 "nome":"Crepúsculo",
                 "classificacaoIndicativa":18,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRKQQVZRn9KEolHSlZWHRWc9dtDHBTacD9SNHJqSjIM0raVWD35lZG-NvG2MzvHKb7S6aZOvX0KCsbu2goAXmTmaxQNo_GznlbQ.webp?r=cb1",
                 "ativo":true,
                 "dataCriacao":"2022-10-26",
                 "avaliacao":5
              },
              {
                 "filmeId":57,
                 "nome":"FullMetal Alchemist",
                 "classificacaoIndicativa":18,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUMnBJVh6sDJwxrTN6kxyTKebpZlLrnJZd8R6EeEvHzCbivRHNnNcx9wvD_OQEmyHW5Ydz0fEGJN8dQ6C-_raoVdq39e-sqNFCAf6vUq0eaDV5Fy9vcG3u7ef0KAw9TvxqkO.jpg?r=7ec",
                 "ativo":true,
                 "dataCriacao":"2022-10-27",
                 "avaliacao":5
              },
              {
                 "filmeId":58,
                 "nome":"Tubarão",
                 "classificacaoIndicativa":18,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfoKy3bDubAMbShLLfYjmX86GQHwCfSLwF6bBcRLxfSMZ_-OK-cEIIdmh0Eb7JSaXbR8tgkHH200RVUZnvw3ybZ5wg0IrPZSnbo.webp?r=c4b",
                 "ativo":false,
                 "dataCriacao":"2022-10-28",
                 "avaliacao":5
              },
              {
                 "filmeId":59,
                 "nome":"A Caminho de Casa",
                 "classificacaoIndicativa":18,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRbVaRyIRm5wBb_90cUyXjwEfrO8Tm3NSiplj78O2PbEj2ccp1yOlXnWXWWx0HjKq8oNM4rNbVj3fTj5z5VTZw5wnPoFwcIk9_c.webp?r=aa4",
                 "ativo":true,
                 "dataCriacao":"2022-10-29",
                 "avaliacao":5
              },
              {
                 "filmeId":60,
                 "nome":"Troia",
                 "classificacaoIndicativa":18,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZLET4x94lPYV8geYx84tNCt8CbD9Ghw9zEjXs6ofkMczmY1Gzj1LW8jpKYicxw7ZsxwX_PvNu_XbGfSM9zWUsxwwGt8EkBLwt0.webp?r=6db",
                 "ativo":false,
                 "dataCriacao":"2022-10-30",
                 "avaliacao":5
              },
              {
                 "filmeId":61,
                 "nome":"Enola Holmes",
                 "classificacaoIndicativa":18,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfHVbEKfXtq0zlSJAxG6-kL8z66qu2Ol5wBV0swpUSZXoQgziqm_ITcC15iX0vASTw7B4UuQ0ZJ1fyzAP3fKxpgRG8iWrWuOmIl1YrSGR9lNqglZxUu38fbq-KTShs48xBma.jpg?r=70d",
                 "ativo":true,
                 "dataCriacao":"2022-10-31",
                 "avaliacao":5
              },
              {
                 "filmeId":62,
                 "nome":"Corações de Ferro",
                 "classificacaoIndicativa":18,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXja6_7sywMJeUY_vkdIC_gKsrihCKKC9OnPmQbX5E9swe3V3nuMuxU5z_VM50y9-B-V_2ypNz-KsOGRi4uTEf12G6oFvqQnAKc.webp?r=9f9",
                 "ativo":true,
                 "dataCriacao":"2022-11-1",
                 "avaliacao":5
              },
              {
                 "filmeId":63,
                 "nome":"Amina",
                 "classificacaoIndicativa":18,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVDf6CgsBjJnc4pdeuU-Hmgj9L8rTqhUiSLmT3LdtWLTA2qcdwpD6oCjtYsDQQLh9iTpZQa78RakQWCWaIAidtbtAwHT7WPZPTepH7-Pd7Rr-DSQdb6JsXrGaz7upOjmWrkt.jpg?r=01a",
                 "ativo":true,
                 "dataCriacao":"2022-11-2",
                 "avaliacao":5
              }
           ]
        },
        {
           "id":8,
           "genero":"Aventuras de ficção científica",
           "filmes":[
              {
                 "filmeId":64,
                 "nome":"Homem-Aranha: Longe de Casa",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaVkM3tEudCArsRWfXOkHw2L0aK3V9QtGhcBUgb4dTWlIWiR8vAS7170n_iUNv69sDwXZX2jLHurWun6nu9eES0snBXlyFTM2DM.webp?r=fcd",
                 "ativo":true,
                 "dataCriacao":"2022-10-25",
                 "avaliacao":5
              },
              {
                 "filmeId":65,
                 "nome":"De Volta para o Futuro",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUAwzAew1ksdQrx9ZxJv-S_eU7NP7DD1l9_Tne2l4Vc2XVbxS7dguxXuw5nxzAfvaRPNBIKItsB49mJtKWGpCsAdkbS28cm8IfQ.webp?r=2fe",
                 "ativo":true,
                 "dataCriacao":"2022-10-26",
                 "avaliacao":5
              },
              {
                 "filmeId":66,
                 "nome":"O Livro de Eli",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQ9MuSwIs0uE-6IOtDpyEw80FTjSNzygPaReRmDDW72UZVN2u5XEQQl2tRDCpsWFm-zlKkn0z7hf-qcltZUiGO9LCTEFZJVQzHs.webp?r=1d7",
                 "ativo":true,
                 "dataCriacao":"2022-10-27",
                 "avaliacao":5
              },
              {
                 "filmeId":67,
                 "nome":"Transformers",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcbJaitda3A7i_RMfD8vScGYvPH95hBjf4nZMoh3r1xCuhN3sVgdLrU4-Qw_cjv0gi8dVadwECBcs5SAeynJTke7ax6_1Uijz88.webp?r=39d",
                 "ativo":false,
                 "dataCriacao":"2022-10-28",
                 "avaliacao":5
              },
              {
                 "filmeId":68,
                 "nome":"Warcraft - O Primeiro Encontro de Dois Mundos",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABf1-bBbR5taXDej8vlgkfKdz7Psz304pgdGrgxLGra9jt4AacpWDjkeF_eyBOxbNyfpTnS1Yu-wpSkfUbsjrVulVQ8SPuiKlQUo.webp?r=d44",
                 "ativo":true,
                 "dataCriacao":"2022-10-29",
                 "avaliacao":3
              },
              {
                 "filmeId":69,
                 "nome":"Homem-aranha 3",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdnSfAyyAzIdzU--RwqmveX9LsfuSdYbb7vRaQd8fkHKS3SdXdBKfuMPRd0PB_Fkvnbvo8Ox0L22UFgx5fSla2riGPX0W0g_OJQ.webp?r=c9d",
                 "ativo":true,
                 "dataCriacao":"2022-10-30",
                 "avaliacao":5
              },
              {
                 "filmeId":70,
                 "nome":"Divergente",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABe7THiDKWNVV67cw3eMCQcm9xTfbvP5Kb71IDu8wV3cw1n4d3uQoLNv6CM4ah2Ql5Yd3FmVfbaLiQ12ilqwIL2vDuGD0sBTlcGA.webp?r=b17",
                 "ativo":true,
                 "dataCriacao":"2022-10-31",
                 "avaliacao":5
              },
              {
                 "filmeId":71,
                 "nome":"Homem-Aranha",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWG-U_NqFTYPwRs5bVfjI_IGeyqGDr95w_UhF2J5i-6-dlnzu1lraQZEfFWl5n7jhZK2zu8SNgU3XR56wsOXvpp-Ra01bSQHqJ4.webp?r=89d",
                 "ativo":true,
                 "dataCriacao":"2022-11-1",
                 "avaliacao":5
              },
              {
                 "filmeId":72,
                 "nome":"G.O.R.A",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfazy7iYe-OAYkG-_4yFqQWEB4wP3voV6xwRPPPF7IwT2ygK7Cs4GtQkbQvdagy1mDzKvM6D4jQ9z7YUPrqIP_5J7-zV2fVUHYk.webp?r=449",
                 "ativo":true,
                 "dataCriacao":"2022-11-2",
                 "avaliacao":5
              }
           ]
        },
        {
           "id":9,
           "genero":"Filmes violentos",
           "filmes":[
              {
                 "filmeId":73,
                 "nome":"John Wick 2: Um Novo Dia Para Matar",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABW7sNBBxv4RcqDacVsdiWb7Vk4PGzS0-DmtFx08Ei-h5dHOjrMCRI7ob5Sm9U5qRVz7wteB_i_QMdoivUwBaK8xBDklKtoPEuWA.webp?r=93f",
                 "ativo":false,
                 "dataCriacao":"2022-10-25",
                 "avaliacao":5
              },
              {
                 "filmeId":74,
                 "nome":"Rambo: Até o Fim",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfapd-5b2r4dh_C5S4-LAV5O4af7-QIzbmwr5S1DsMet6u8A61hnLnr-3iIaiqkwpd1sIjTmVeZpPYt7ejWi2YpnpSNYXfClJqI.webp?r=2b1",
                 "ativo":true,
                 "dataCriacao":"2022-10-26",
                 "avaliacao":5
              },
              {
                 "filmeId":75,
                 "nome":"Bastardoz",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZACn-6vedYOQ4vQpTi0RTzC3bg5KPdcjrVAIQMN0gZeC5zsiya_fpY7mFVbGlA-YBZLDqLgIsZn1N9GCGaJjm8xLXdE8jWmC_Pwl9fQiD5rddQeS2Z1ZQnce59V5Yr7FK4B.jpg?r=484",
                 "ativo":true,
                 "dataCriacao":"2022-10-27",
                 "avaliacao":5
              },
              {
                 "filmeId":76,
                 "nome":"Guerra Mundial Z",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZy2239xX01NAqKPhN8ZTcdM5fVksMBDiG_i988crpaQ71TG4QadX_ARMCiIrqKHvZ4UOqH1hzXUdharZD8k5LpAxQibtw9FPJk.webp?r=b93",
                 "ativo":true,
                 "dataCriacao":"2022-10-28",
                 "avaliacao":5
              },
              {
                 "filmeId":77,
                 "nome":"Linha de frente",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYpV2rKcx89A4mscPMXowp_pTzqHQiE557vjqDNM_z0cd6KL6x6ioaJzp9A5W6MRlKUApRJi9moq3K9bT0lBzvzhtVW7EvZEBLA.webp?r=feb",
                 "ativo":true,
                 "dataCriacao":"2022-10-29",
                 "avaliacao":5
              },
              {
                 "filmeId":78,
                 "nome":"O Assassino: O Primeiro Alvo",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZWTw0veMns6aA4yVD_TfrV_I24s6_SPhWvZ2jITLmV__i8BNDAtkT5_yotczjo8ylniWGFpOygf4jWuAqti3eysVbsC86Xwa6E.webp?r=9f9",
                 "ativo":true,
                 "dataCriacao":"2022-10-30",
                 "avaliacao":5
              },
              {
                 "filmeId":79,
                 "nome":"Hanna",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcYb_9IGgmJrlR3PpNN9i6dIbQVpXLdn3hHqxtkrvUyBM9aMR37nHnThQtg-f54T-pCRPD3B1fKRCbEr084earHgKlGZ7C-5D7E.webp?r=d52",
                 "ativo":true,
                 "dataCriacao":"2022-10-31",
                 "avaliacao":5
              },
              {
                 "filmeId":80,
                 "nome":"Warcraft - O Primeiro Encontro de Dois Mundos",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABf1-bBbR5taXDej8vlgkfKdz7Psz304pgdGrgxLGra9jt4AacpWDjkeF_eyBOxbNyfpTnS1Yu-wpSkfUbsjrVulVQ8SPuiKlQUo.webp?r=d44",
                 "ativo":true,
                 "dataCriacao":"2022-11-1",
                 "avaliacao":3
              },
              {
                 "filmeId":81,
                 "nome":"Kate",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeJ0svNHQJuK079NI3sQ0UYuEx61nzKiGvcbhC4kSHuxtlYNtpDbuEZGF1T1yw5Iv22qY_bQWBblo00k2fzLw89aEHFiU3-Mf4Z7wxUqgNIS5JtSAQE4HIylaVi0EKnuhZx7.jpg?r=be8",
                 "ativo":true,
                 "dataCriacao":"2022-11-2",
                 "avaliacao":5
              }
           ]
        },
        {
           "id":10,
           "genero":"Lançamentos",
           "filmes":[
              {
                 "filmeId":82,
                 "nome":"Assalto ao Poder",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZIx-6R_reUBaoupHmaJGTTn4lsE1q2m7dMzJZ_4W7bfeSfLGx1jhh2MZK0MjWTcyY9k_IqQfQDkRU4PYqmkixpnEEoC7L0TZf4Qd1-MtVW914NsqDhDSg3go2s_lpyaH_teBJDpgsmjypBjVhFyMIiD5owBIheMDLI.webp?r=a18",
                 "ativo":true,
                 "dataCriacao":"2022-10-25",
                 "avaliacao":4
              },
              {
                 "filmeId":83,
                 "nome":"A Caçada",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQFlUVlDwAUy1fE71Jtgi3mNHcjkkCalaeFDrJgyZgcd5aIZrBNw4fPw0gPYshPYVNlR2ez4Nq7n2lUq4tb7OWyH6zYT5Rx7Vx9pG7hGTFdKsz-35UBw-mau1zwN1ZruTFCYbaPXfgKGvI-e3o9PbBEephwfiZP9r5s.webp?r=aa8",
                 "ativo":true,
                 "dataCriacao":"2022-10-26",
                 "avaliacao":4
              },
              {
                 "filmeId":84,
                 "nome":"Jiu Jitsu",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRC6acokWffxphfztbuFgNOdsoZn15D3xfC8gzuB5RQb50ITjuRi6L1ghGc2ikMrlN1VwRPAOJjeP4Igpe8RH7k9NmY8i0PadlU.webp?r=cd1",
                 "ativo":false,
                 "dataCriacao":"2022-10-27",
                 "avaliacao":5
              },
              {
                 "filmeId":85,
                 "nome":"Lou",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUvE6UOW2WW_owyJZaVKLW8nrCFjDgg-mA4t6JFNwvECGYPO9Cz9-68KFaAaFSKaLwpmLxyIQy645gICtczimJje7BEUyB8EZIWFq08fgXrrHEbyClRvFzt5p2L9qJQOBW7D.jpg?r=990",
                 "ativo":true,
                 "dataCriacao":"2022-10-28",
                 "avaliacao":5
              },
              {
                 "filmeId":86,
                 "nome":"Dupla Jornada",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZupNr4LgwhMchF73MoIKYC_KD3BTGtu71fssMLGylHGB2l5zMt9pvjvmm-nL2OOWYaI3cQ0HUPj3yEqK-DICmfbpiR1S631383TUZWz6imGHLHI88TH7lDR6lVtvsSecl_c.jpg?r=731",
                 "ativo":true,
                 "dataCriacao":"2022-10-29",
                 "avaliacao":5
              },
              {
                 "filmeId":87,
                 "nome":"Agente Oculto",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfCDMNW8yxRtbwDoML7w1xweQfvl9usjqq8yYm2R-Ib0MU4D53nyQqloGNIr0Gdt_NZxzti7PTRMtdWeZnKbBqogqDbRZLP1lBaYQZzkeFhj-sfZNrqG153WcdPLA9sKDWIc.jpg?r=9d9",
                 "ativo":true,
                 "dataCriacao":"2022-10-30",
                 "avaliacao":5
              },
              {
                 "filmeId":88,
                 "nome":"Fullmetal Alchemist: A Vingança de Scar",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXLFBMkS0uBnsxZf6XVIXjrPceUOxOGDJ2Q3xS8bcCtenHo_ILdHEk5alC5d9FOgXkG7pQsG4H1DWFdhN73HUM4AO3QJ0CWEGXunKsFeM9ixq_cxotl9wvaIrOoZJ0RDsuWl.jpg?r=573",
                 "ativo":true,
                 "dataCriacao":"2022-10-31",
                 "avaliacao":3
              },
              {
                 "filmeId":89,
                 "nome":"Homem-Aranha: Longe de Casa",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaVkM3tEudCArsRWfXOkHw2L0aK3V9QtGhcBUgb4dTWlIWiR8vAS7170n_iUNv69sDwXZX2jLHurWun6nu9eES0snBXlyFTM2DM.webp?r=fcd",
                 "ativo":true,
                 "dataCriacao":"2022-11-1",
                 "avaliacao":5
              },
              {
                 "filmeId":90,
                 "nome":"Happy Birthday",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABd9E9R4WU5IgAB3UIbzgrOIjBrhhNli65J849H_FyGIHqL3t_Z6sd63w-FeHNe1XwU1BdyqfyeG2W9REQ1THw_Wt8KHaSMaGBCw.webp?r=043",
                 "ativo":true,
                 "dataCriacao":"2022-11-2",
                 "avaliacao":5
              }
           ]
        },
        {
           "id":11,
           "genero":"Ação, ficção científica e fantasia empolgantes",
           "filmes":[
              {
                 "filmeId":91,
                 "nome":"A Grande Muralha",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfekZyGVhuo_IZU2KgAlFd3CWORabS4GINGNqhT-zaTEvzYJLvD5ttYPp_zh8OUbfvtDK3dYTXmTIhLfQWYdTOqEx2leD2a-9RM.webp?r=a07",
                 "ativo":true,
                 "dataCriacao":"2022-10-25",
                 "avaliacao":4
              },
              {
                 "filmeId":92,
                 "nome":"A Múmia",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbcfvlP27lARiz1MC3H30CDr4uYEue3RETU-vrNgebsbIMh1zjOPT39XT1AoxmxV4ziySzKjk49B4JoViOMu7fWs5eP_a8emBNc.webp?r=373",
                 "ativo":true,
                 "dataCriacao":"2022-10-26",
                 "avaliacao":4
              },
              {
                 "filmeId":93,
                 "nome":"Jumanji: Bem-vindo à Selva",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVd6sTO3eZY0BSwwlMF_j-3J3bFFxUEL7uJVEpJexVWiEYbDitlB0U50Y7a5h_MZDZoNqEz8taa0udSfjJKl1N6lu0Lqj3rIEcE.webp?r=fd7",
                 "ativo":false,
                 "dataCriacao":"2022-10-27",
                 "avaliacao":5
              },
              {
                 "filmeId":94,
                 "nome":"O Espetacular Homem-Aranha",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQFAHeWiWdwkpCOLvJvnoTGXni0b4iMrIebUL5t79fPUoa1aqC43E9g_0ANmlUwOBSKCU1wwaB3ifCmSwTQZIBT86LyA4saBbn0.webp?r=8de",
                 "ativo":true,
                 "dataCriacao":"2022-10-28",
                 "avaliacao":5
              },
              {
                 "filmeId":95,
                 "nome":"A Serpente Verde",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfy4jKj8Cr9o-Wm-rVLhF5BI_YIlZm4ljG6vhgxnzJn41PR0-LoIo2-FRum8PggrKmBvJ1qNPT3zZ073lCUx5zmZDlCGt8ZYjh5Vbpp0k_T4fGp6r-Z67Dx5d7qtg1BgDNu_.jpg?r=e7c",
                 "ativo":true,
                 "dataCriacao":"2022-10-29",
                 "avaliacao":5
              },
              {
                 "filmeId":96,
                 "nome":"O Último Caçador de Bruxas",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTN_Mn91FTqhl_3-tPG-zN9e6lykg1sr2sqB3LVTtQq8H8bYC0p2CVl5hwJLpFOMVINAyZD2QlmShBIHYX5oF0CjbCQg_SSKzFg.webp?r=0ec",
                 "ativo":true,
                 "dataCriacao":"2022-10-30",
                 "avaliacao":5
              },
              {
                 "filmeId":97,
                 "nome":"Fullmetal Alchemist: A Vingança de Scar",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXLFBMkS0uBnsxZf6XVIXjrPceUOxOGDJ2Q3xS8bcCtenHo_ILdHEk5alC5d9FOgXkG7pQsG4H1DWFdhN73HUM4AO3QJ0CWEGXunKsFeM9ixq_cxotl9wvaIrOoZJ0RDsuWl.jpg?r=573",
                 "ativo":true,
                 "dataCriacao":"2022-10-31",
                 "avaliacao":3
              },
              {
                 "filmeId":98,
                 "nome":"O Incrível Hulk",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABczgjQUFZnQ8-FghVRXnE1Rr_ivTVeSMBI4CFzKLH_d6p9KPB6F3yDk1k-9i8qHjZu6tCWUYo9ArEfEoWWvtyxok6YhSBLRexYo.webp?r=71d",
                 "ativo":true,
                 "dataCriacao":"2022-11-1",
                 "avaliacao":5
              },
              {
                 "filmeId":99,
                 "nome":"Chappie",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABajWbMgIRAQWXur_XM4mAnef8Kj3B8k8WZS5YWFvO6eht-TJNwTmgE6s7p20BUiamgHgnYJYnneEyRZRx46sGv9ze43Y3RFuHyM.webp?r=ec2",
                 "ativo":true,
                 "dataCriacao":"2022-11-2",
                 "avaliacao":5
              }
           ]
        },
        {
           "id":12,
           "genero":"Comédias de ação",
           "filmes":[
              {
                 "filmeId":100,
                 "nome":"Três ladrões e um bebê",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABc557fsAa9r0tBiXJZDZuuWBnFVGrDnqRLrU7tmWoNSRBpdAnOVIglWeECEim2XOvt7AlpHh8QwNBmXUSJB33xoDJVBVbXGIibM.webp?r=a73",
                 "ativo":false,
                 "dataCriacao":"2022-10-25",
                 "avaliacao":5
              },
              {
                 "filmeId":101,
                 "nome":"Policial em Apuros 2",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUoOmU4OujfjuSZ-2l5-d5oRnQzxqGoCTMl6DTjOZnQmlkSKoYhAGV_Ls4LHsA4-QfnQitgkTjGmksWV9Ni3a8ca_9scmdDMCCQ.webp?r=da7",
                 "ativo":false,
                 "dataCriacao":"2022-10-26",
                 "avaliacao":5
              },
              {
                 "filmeId":102,
                 "nome":"CHiPs: O Filme",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbDnUNr7LneHOHo5Bz3XtT6fTbiwXpfjYKnYOQjg3C36AaKG7GuLbTCVGcKDf8grW4OTZG0NCQzXu-VpPQdxc0hyQnih7GEZ_jY.webp?r=b08",
                 "ativo":true,
                 "dataCriacao":"2022-10-27",
                 "avaliacao":5
              },
              {
                 "filmeId":103,
                 "nome":"THE FABLE",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZkQNCVfDjrDZFlgmurOIFJlbb-0yO9gK5akUIkA-tm9_VCkfBbhMUMxmnNvZocw-sJ1cZfw_kJoKHb1C1G4YI3r7xJao5RwVgc.webp?r=44f",
                 "ativo":false,
                 "dataCriacao":"2022-10-28",
                 "avaliacao":5
              },
              {
                 "filmeId":104,
                 "nome":"Zerando a Vida",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZPsRj9oklQFx617Dui54I1q_B3D6nUmkvdP3UCo7XrigCr___HNkrohmyeqoo5-pCIVVfvLiUEMuMhOSMjtiFHoD8gffgmE7K0gOJKfoSnAxvzqT7H4CeZA48YFl11xJCwq.jpg?r=2d1",
                 "ativo":true,
                 "dataCriacao":"2022-10-29",
                 "avaliacao":5
              },
              {
                 "filmeId":105,
                 "nome":"Psychokinesis",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABenr_Ypk1CS6FPg8k71ozhvLuWx8k3UgrKR1dCiPkcx0mZSVTyY2C480GTNKJPU5Ou3RrC2dWM6TPKC0GBCL-Z90sSsm58pe9yt-6k9ngt4rgLKBsVxD-0YhHG9GtCk-NjGv.jpg?r=604",
                 "ativo":false,
                 "dataCriacao":"2022-10-30",
                 "avaliacao":3
              },
              {
                 "filmeId":106,
                 "nome":"Alta tensão",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbG6zLvw1_QRBfViTdq6nsubtcWkhBiqO18NRTerBsNKj35VLXEEccv_H1YQ5mqpWihkWyFncZl--o-SZOeVPlHJ1F56GEyd6nc.webp?r=76d",
                 "ativo":true,
                 "dataCriacao":"2022-10-31",
                 "avaliacao":5
              },
              {
                 "filmeId":107,
                 "nome":"MIB: Homens de Preto - Internacional",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABazm0yrkhca2t5rIyx06S6lYjUQ0Cqxcc6GLzNjA6O6rC-7j8Oj4-IrJxt5fkn9I2tM-FDoY_GmlX1dGvYW5PzBjBo61V-mGc_Y.webp?r=e9b",
                 "ativo":true,
                 "dataCriacao":"2022-11-1",
                 "avaliacao":3
              },
              {
                 "filmeId":108,
                 "nome":"MIB - Homens de Preto",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbwe_2aLzMjJIwlR239-zitbGa8tuHlMvugkRFRAJqIFtp9aEEI2L1C3Dw2T9Wq5ORvhAo2nO0bNCMg_EuM7PSC6QBOcg9sKct8.webp?r=d40",
                 "ativo":true,
                 "dataCriacao":"2022-11-2",
                 "avaliacao":3
              },
              {
                 "filmeId":109,
                 "nome":"Um tira no jardim de infância",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYz-z-9-MuFyFQ_7ZEO99DvApxS1BKR7_N67jcfaoXat7l1gVwl4wFRCLxPbzabcQdR6rh3i34s48Ej0D97ayXO4rNOzajE0EVA.webp?r=cef",
                 "ativo":true,
                 "dataCriacao":"2022-12-4",
                 "avaliacao":3
              },
              {
                 "filmeId":110,
                 "nome":"Caça-Fantasmas",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSMQNbT2w0r6tVhMxbLD-k2Cr02w7f0xyqENutEMKGO09B-hhav3MM5hWT1T-Xmi4CUsUNj_vkleUYP_HKmPKqsCr6P0pPnhAZw.webp?r=033",
                 "ativo":true,
                 "dataCriacao":"2023-1-4",
                 "avaliacao":5
              },
              {
                 "filmeId":111,
                 "nome":"Pixels",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQazgwmJJtVRiov_HGadZyV9rq-7JocRXgPxFBzL_qsi5S-VdLfN6RrVneB64oozeKE5sneQpFYXfwT_8uJoXG-pB9gm-OdHf1U.webp?r=858",
                 "ativo":false,
                 "dataCriacao":"2023-2-5",
                 "avaliacao":3
              },
              {
                 "filmeId":112,
                 "nome":"Um Espião e Meio",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU6ZykIeqTM-9WXa_PSFpGP_wJWmBaZSmXOtnK6fZJtdRLnfrJAzEHqiHG9nNJN_jmayGrtyh10POfN3tsigOMVB9dFDuy-QSUE.webp?r=a71",
                 "ativo":true,
                 "dataCriacao":"2023-3-9",
                 "avaliacao":3
              },
              {
                 "filmeId":113,
                 "nome":"Os Opostos Sempre Se Atraem",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABToWmKjSqvp-SrIvBqWPaZJlnoBUzd_6Hi51R2X12GzH8kn3aJMeQxVdD2bdGYlrFC6gOGao32PLXjpeGk9GbaPQi_5-W0NpBGf1_dsL0w4MQ7dQO_0ERk7Ecl-bACpdIBHl.jpg?r=6fb",
                 "ativo":true,
                 "dataCriacao":"2023-4-7",
                 "avaliacao":5
              },
              {
                 "filmeId":114,
                 "nome":"Em Ritmo de Fuga",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQK3ZMQxnMCbPpcDfPUVoL8H6VrTD7LKhjprCHGyDBeR4OxAuutnYzEHsUIscnLz2DuwKi8VoPB6t3lED9I0gwyqfT3j1AB4c44.webp?r=884",
                 "ativo":true,
                 "dataCriacao":"2023-5-9",
                 "avaliacao":5
              },
              {
                 "filmeId":115,
                 "nome":"O Terno de 2 Bilhões de Dólares",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXWBGd_J4XOWpTJKSrsWF1Dyj7TLUVYJB2rIqheWRoHNgwrZr8LHsajy_tylo6abtenuDTZqfi3kEH_DDLdQI0kaeuKeKvh2E1M.webp?r=a6d",
                 "ativo":true,
                 "dataCriacao":"2023-6-9",
                 "avaliacao":5
              },
              {
                 "filmeId":116,
                 "nome":"As Tartarugas Ninja",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTKg92Nac-ZuSi-83DC2IPAcfkDy4uY9GHhlIYrVGQvZ7bmGKy0TlK1SP7qy7P5bWJUx5wNj_XV1edmn0UH1VN7fKS6MnZ_oadQ.webp?r=9f3",
                 "ativo":true,
                 "dataCriacao":"2023-7-11",
                 "avaliacao":5
              },
              {
                 "filmeId":117,
                 "nome":"As Tartarugas Ninja: Fora das Sombras",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRvpZQJcRf9HLftWZPTGjBY6p--IRVrJJIbEFALInQPzf4uSkMUj-VadG4neyTz8voVSAzk5K9L6qYTRYfms3nf7JXuDtY_BIlw.webp?r=776",
                 "ativo":true,
                 "dataCriacao":"2023-8-11",
                 "avaliacao":5
              },
              {
                 "filmeId":118,
                 "nome":"Amor e Monstros",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXhVIhDWDaTQqkNUJ6DM_xtQzRFdutZntWKq89ku4dAEKj0NgdsaCJguLX7T4w3bZjkdggUGA42tSjoSU_S_-KAIUlwasKvt85fpSj3DRBvdYqoFdMXX6vgEY5wMCgrwEj1G.jpg?r=493",
                 "ativo":true,
                 "dataCriacao":"2023-9-12",
                 "avaliacao":5
              },
              {
                 "filmeId":119,
                 "nome":"Okja",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXUb6byP5QUwCa0FFxEi5c8DkwwCDgF1r59JDz0kB0yDGY_WeTv-tzDMqxqFiyjNHmmArNwC6buBalYhPRMsH87qOBTj7LL8iGvXaQM_HlmR2wz94mQphYp5AQ4U-tJALRpq.jpg?r=192",
                 "ativo":true,
                 "dataCriacao":"2023-10-14",
                 "avaliacao":5
              }
           ]
        },
        {
           "id":13,
           "genero":"Filmes e séries asiáticos",
           "filmes":[
              {
                 "filmeId":120,
                 "nome":"Nova Ordem Espacial",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRr2cb5C_eRoKAZ52zQw8rX5h2HyEf0tfDQREANx07k663SeKL9bOae4WToTnbVg4srhfqBWGFnyAOsmbK3E2xKLODVp_1mscsO4shJVwUOdwrY0zYbkltXbJS6W4Cgko_r6.jpg?r=9fb",
                 "ativo":true,
                 "dataCriacao":"2022-10-25",
                 "avaliacao":5
              },
              {
                 "filmeId":121,
                 "nome":"O Monge Desce a Montanha",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUWjhXOYOUtEreFm3FGNjZSmAm75ZpsxJF4A_B1Yqz4-e2JuOotljh8huDRvILxybJDR1vLFVhRI2eaka5G1KKH4AfTlqzxYGf0.webp?r=a8c",
                 "ativo":true,
                 "dataCriacao":"2022-10-26",
                 "avaliacao":5
              },
              {
                 "filmeId":122,
                 "nome":"Seul em Alta Velocidade",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYbFcNSqu8cY0QF4iL23a6T6dW4WXlUv3W_QBqiF75okrYmY_yozWHnc_7_f3ibDLhK0uQQSvEBaDVS1Q7q6kX_5_dw5Rz2xQgxmK-D59ezghQx5jSFFFAt0Gdv-niO_xQ55.jpg?r=702",
                 "ativo":true,
                 "dataCriacao":"2022-10-27",
                 "avaliacao":5
              },
              {
                 "filmeId":123,
                 "nome":"Samurai X 1: O Filme",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABa_jGDKQwmXqeTZKAFs_FWI7wGBtjz87vIbR9LMANbpzSce47WMCugA4D9Wx7XZSYlgLd6rYIrS0rMqyu9Wx8UVrGK2WYmA4cWc.webp?r=dfa",
                 "ativo":true,
                 "dataCriacao":"2022-10-28",
                 "avaliacao":5
              },
              {
                 "filmeId":124,
                 "nome":"O Grande Mestre 3",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABb2ULRhJ_yDJNR4e_VjO8_USPpvf11geXghzZPLiQRQCuirVBzqoRolD2H6z5Ngw0FL499lmd-T3U9mQbVVl9x39noEYKfss4FU.webp?r=56b",
                 "ativo":true,
                 "dataCriacao":"2022-10-29",
                 "avaliacao":5
              },
              {
                 "filmeId":125,
                 "nome":"Samurai X 2: O Inferno de Kyoto",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfQsuoV32bui6SO71s11rTVtzkH27BQSX9VeNOjxTJgFqXztc3wBFcyr6eiuNhBi24_tvC7WH0pAeyrK9WQrUGUyE3h-x2P3W-A.webp?r=1be",
                 "ativo":true,
                 "dataCriacao":"2022-10-30",
                 "avaliacao":5
              },
              {
                 "filmeId":126,
                 "nome":"Illang: A Brigada Lobo",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeKYqBkWHGhrBoFqeUDac2X6qmoYdZju7mYJwjdfi88rpaSfzFaNeIBJEYxB06lm3c5NuByzauucnNAu3fNA0vl0gy3CXNN8y0szhJIOdaL4wB6HYQ7vQyJMLeNvUhomSyrp.jpg?r=d86",
                 "ativo":false,
                 "dataCriacao":"2022-10-31",
                 "avaliacao":5
              },
              {
                 "filmeId":127,
                 "nome":"Bleach",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSqBvMDrovUkIfDL2xO4qDpCmAgBSvsnBdZs7G1lWUFfe5VVb4BxvQmVYReCFBcSG7Ai2Ud4sk6LhDoawOEJb9Kl7PDRSlT_LpITIJhlRwyzTFGSiO4LYAnzFUnBkq-yt3oL.jpg?r=878",
                 "ativo":true,
                 "dataCriacao":"2022-11-1",
                 "avaliacao":5
              },
              {
                 "filmeId":128,
                 "nome":"Tokyo Ghoul",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfQcEariAylCCu_XRUPmLUbB2DlGK2fah7ZHdLQytHFpsfN7DpAlifhXtWH7Mpx2EjQ9dhWv6QUQBcepvOUmJDcDpEaAu-2cB14.webp?r=8ec",
                 "ativo":false,
                 "dataCriacao":"2022-11-2",
                 "avaliacao":5
              },
              {
                 "filmeId":129,
                 "nome":"Vikingdom - O Reino Viking",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVHmuKT0VPWyMeOaC1xNMnyOmHsB0hTmBEAtNj-gI8-HUS7bqI2ds4ktCx_hvac7OEzU_a_xNNsjJNByz448EpUNiKvkLE3mv8Q.webp?r=f33",
                 "ativo":true,
                 "dataCriacao":"2022-12-4",
                 "avaliacao":5
              },
              {
                 "filmeId":130,
                 "nome":"Attack on Titan",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABf8ISAEyxCFde2M_aiVlfrjxKnbTc87TCt75qHOM4FrF1R76IfHTHFhRyDoZnrGuAP9dvROXo6R-i0HIL6IXoJiv4ucTVFQIy70.webp?r=76a",
                 "ativo":true,
                 "dataCriacao":"2023-1-4",
                 "avaliacao":5
              },
              {
                 "filmeId":131,
                 "nome":"O Despertar da Lenda",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSQxTPPORkDvnA6KnSrcNQCz_xEwPVyqRkQxLIeZX2ul-uGVRoOMiVoeKUsEnjSvL2rATkXh7NrU95ZNrWDLWLmC8kCLmCac0jI.webp?r=32b",
                 "ativo":true,
                 "dataCriacao":"2023-2-5",
                 "avaliacao":5
              },
              {
                 "filmeId":132,
                 "nome":"Samurai X: O Final",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABR3JFiiOi7mTcjziIb0YYl1WzeYzhyfZiC8gk0hU-pGivtLc1Tt9x6Y98cCrMVHyzWzvUI0L3Q2rkJlc1ElKATm9OC4TUTEe8Lzw_gYt_KFpvoDhm0JitRGU7NLKrcUwBIko.jpg?r=fed",
                 "ativo":true,
                 "dataCriacao":"2023-3-9",
                 "avaliacao":5
              },
              {
                 "filmeId":133,
                 "nome":"Samurai X 3: O Fim de Uma Lenda",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSRhG3I9TCM7iP0AITjjx1bswO85ocnvyMT7iLqDkG-fTunkm85eV6RyGqgJkbxZA7f0bqsFRvr1pAD7-WUtH4eWvV-OTt9R1Yw.webp?r=e17",
                 "ativo":true,
                 "dataCriacao":"2023-4-7",
                 "avaliacao":5
              },
              {
                 "filmeId":134,
                 "nome":"O Mestre do Yin Yang",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdz-dMiL6JZ0BK9dmfWfGdGrDarzJ0CdjPgDXn19O10YhOHYD5EFVUtjmLkZnnAPjZ7ua0301zZCi_Na40bGC4tJMPsOYVTMo8BxXOt77mPuzSTyP6cWROBnY2T5Iqp84g81.jpg?r=2fc",
                 "ativo":true,
                 "dataCriacao":"2023-5-9",
                 "avaliacao":5
              },
              {
                 "filmeId":135,
                 "nome":"Mat Kilau: O Guerreiro da Malásia",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSqSYA17SxxfjcfHhrr0sjc1bl5E1CmWfIsVNXPdiqMdvXss7ei0nf3d6eWGZlkVxRkLS9QckW7UYxleEIOtZd6gdvwL7mh1ynQ.webp?r=65c",
                 "ativo":true,
                 "dataCriacao":"2023-6-9",
                 "avaliacao":3
              },
              {
                 "filmeId":136,
                 "nome":"Mundo Duplo",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTUCxxok-e0RhGaHkIF26AtTY56mWwozTeVm9eXMFvLoXuxSDZtVGN4HrG4UzXPU6q1myK6XWEPW04FXpVK-4P0UGJhXVWALXks.webp?r=773",
                 "ativo":true,
                 "dataCriacao":"2023-7-11",
                 "avaliacao":3
              },
              {
                 "filmeId":137,
                 "nome":"Mestres do Yin-Yang: O Sonho da Eternidade",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYWJxf7zMszT1Y_ZyIaqZGTus7vi1MVCNnMViO5xQWmC9SG6NHlh7jgfEDoVVKBrL1M6-BrM7RSyNaLZS0oTMFsSd6fsM67Mn2dlHCSJazUNzbBnFP4ynJY9BYS0hKQ-npV9.jpg?r=a40",
                 "ativo":true,
                 "dataCriacao":"2023-8-11",
                 "avaliacao":3
              },
              {
                 "filmeId":138,
                 "nome":"O Hospedeiro",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTmq8wUFPFV0YiY58jktv1pXPPBQAy6wnFo_-8IheuK4A7ZsXcxr5zvnDwWa1WC6TBd-4otuP9BTxMmgIrQEdF8qityrdxVnMwk.webp?r=cf4",
                 "ativo":true,
                 "dataCriacao":"2023-9-12",
                 "avaliacao":5
              },
              {
                 "filmeId":139,
                 "nome":"The Fable: O Assassino Que Não Podia Matar",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfIMZEQZorwGejFUV-f1BW4dCFnSlngo0ok9A1lGYHfXmfnKVCU4bU6Y-C8p8fqYMS9ggMUuRLzOKin3G3OdhEa0-yinYabBEtI.webp?r=212",
                 "ativo":false,
                 "dataCriacao":"2023-10-14",
                 "avaliacao":5
              }
           ]
        },
        {
           "id":14,
           "genero":"Ficção e fantasia",
           "filmes":[
              {
                 "filmeId":140,
                 "nome":"Resident Evil 2: Apocalipse",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU2vCfoloylV1Xdsah2_va4oHhiYPhyLrGJpbIere2tURsgwI_9J63vjy5u2q5dHMN0ofuK9sobosbKfQeU6fl73r6bWLhPcyrk.webp?r=f88",
                 "ativo":true,
                 "dataCriacao":"2022-10-25",
                 "avaliacao":5
              },
              {
                 "filmeId":141,
                 "nome":"O Caçador e a Rainha do Gelo",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABb8663hVYU8VDsUtHavgj-0GbPCJICx_ZNvfv-KmruGQ77e9q7jAeWaL0Bo-4Lstfqwf3EoPur7YcZQyY4VK6Uu_G7AGLwSbgvs.webp?r=92a",
                 "ativo":true,
                 "dataCriacao":"2022-10-26",
                 "avaliacao":5
              },
              {
                 "filmeId":142,
                 "nome":"Hellboy - O exército dourado",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYLXwq84kbUzRoyaGv5wkzYy15k5eb5lxSiXiDEwtMOPQwbASyBWJ-JEPSsP2WM4omVMd76Rhbg0dqEN1GNIc7B3D0Bcn27Diuo.webp?r=ef6",
                 "ativo":true,
                 "dataCriacao":"2022-10-27",
                 "avaliacao":5
              },
              {
                 "filmeId":143,
                 "nome":"O Incrível Hulk",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABczgjQUFZnQ8-FghVRXnE1Rr_ivTVeSMBI4CFzKLH_d6p9KPB6F3yDk1k-9i8qHjZu6tCWUYo9ArEfEoWWvtyxok6YhSBLRexYo.webp?r=71d",
                 "ativo":true,
                 "dataCriacao":"2022-10-28",
                 "avaliacao":5
              },
              {
                 "filmeId":144,
                 "nome":"Divergente",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABe7THiDKWNVV67cw3eMCQcm9xTfbvP5Kb71IDu8wV3cw1n4d3uQoLNv6CM4ah2Ql5Yd3FmVfbaLiQ12ilqwIL2vDuGD0sBTlcGA.webp?r=b17",
                 "ativo":true,
                 "dataCriacao":"2022-10-29",
                 "avaliacao":5
              },
              {
                 "filmeId":145,
                 "nome":"Blade Runner 2049",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUcd2xdB6EtAysjoW3TwQwCd4oyGerjdLDaaL1RXkjbDRpWn_Ar0AG2nYrLUwEY9lIsMMdUUgCVfOVNqFANhkhjhXW-BBlQmC1k.webp?r=1bb",
                 "ativo":true,
                 "dataCriacao":"2022-10-30",
                 "avaliacao":5
              },
              {
                 "filmeId":146,
                 "nome":"Lucy",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABROFqAo7-c7td0bZCGAg1mQL6nom6fEZ6Blq-_swnbr204WuUhYUo9hhrv5d5kTyuX3ZaxlP6tTJH9MbnN7TUuvPfhduXNuqYjI.webp?r=44f",
                 "ativo":true,
                 "dataCriacao":"2022-10-31",
                 "avaliacao":5
              },
              {
                 "filmeId":147,
                 "nome":"Homem-Aranha",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWG-U_NqFTYPwRs5bVfjI_IGeyqGDr95w_UhF2J5i-6-dlnzu1lraQZEfFWl5n7jhZK2zu8SNgU3XR56wsOXvpp-Ra01bSQHqJ4.webp?r=89d",
                 "ativo":true,
                 "dataCriacao":"2022-11-1",
                 "avaliacao":5
              },
              {
                 "filmeId":148,
                 "nome":"Bleach",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSqBvMDrovUkIfDL2xO4qDpCmAgBSvsnBdZs7G1lWUFfe5VVb4BxvQmVYReCFBcSG7Ai2Ud4sk6LhDoawOEJb9Kl7PDRSlT_LpITIJhlRwyzTFGSiO4LYAnzFUnBkq-yt3oL.jpg?r=878",
                 "ativo":true,
                 "dataCriacao":"2022-11-2",
                 "avaliacao":5
              }
           ]
        },
        {
           "id":15,
           "genero":"Filmes repletos de suspense",
           "filmes":[
              {
                 "filmeId":149,
                 "nome":"Um Dia Difícil",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaGNluECvK5Eh3YmKByUZtb1gY1UIqpn4Q11qjyXWRdzlSMEusumCweCdrqS88gBDad5o0eVIuEquOT5EADo2k4TNiCCo1kz8aFGh-Lf_4mFHniv7LIbgPjC4MX2chd3s41T.jpg?r=aec",
                 "ativo":true,
                 "dataCriacao":"2022-10-25",
                 "avaliacao":5
              },
              {
                 "filmeId":150,
                 "nome":"Goosebumps: Monstros e Arrepios",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUg6HmtiWzdnUkDL7iGe7votfUgSwf1TJvnAvOlSxtUhMNvDgnrx9cU4OBY1gn-_AW9mTVpIvXdI-uNDeP66d2Cfh4Z1PE9b3pI.webp?r=a08",
                 "ativo":true,
                 "dataCriacao":"2022-10-26",
                 "avaliacao":5
              },
              {
                 "filmeId":151,
                 "nome":"Jack Reacher - O Último Tiro",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABe2n3u4RvpRHgdh6gLyZvrmHoT_RnBPjnUZzLr4XsTepBF-1yLzx51lUcB_7UpcXe1rJasIavwdWQh-z5u0tWvDBE3ijTGij1mU.webp?r=026",
                 "ativo":false,
                 "dataCriacao":"2022-10-27",
                 "avaliacao":5
              },
              {
                 "filmeId":152,
                 "nome":"Fuga de Alcatraz",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVJm3Cus0On7bDI968XoWbU6YI_Da32urvD8PMOQbozhZbCkFRIK8gYzhIm26Q_4IWJSpA76L4QtUp7UmvCMoU71fV7_tbnQObc.webp?r=87c",
                 "ativo":true,
                 "dataCriacao":"2022-10-28",
                 "avaliacao":5
              },
              {
                 "filmeId":153,
                 "nome":"O rio selvagem",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSOV5WlA9icVBTwEF1MdRnWQj9p-lqkeA9BikRTCI3JrgeuuV8cM99O01iX0eH-Anv4m_gQuKdwhZP_RfNgm9poG9gWynep6PPU.webp?r=512",
                 "ativo":true,
                 "dataCriacao":"2022-10-29",
                 "avaliacao":5
              },
              {
                 "filmeId":154,
                 "nome":"Tempestade: Planeta em Fúria",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfu2o-PEpi8HHuqBXlexdafCqSmdId20XQ54oJg0zKcSaRcZukuNdzmbzxqmZ6UknentF4_pj4271EQEqyra2L5hfzgV35fPlJA.webp?r=3fd",
                 "ativo":false,
                 "dataCriacao":"2022-10-30",
                 "avaliacao":5
              },
              {
                 "filmeId":155,
                 "nome":"The Witcher: Lenda do Lobo",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABT-r5lOqN23VFapa_DgBuznC8_DiAIhy8HfeeisyKBLtPNRKRoziUMDoZwpl5YotWAOvVwfixXw0HG_4OpcT6VLwbFaZjaXzI7SNLLsCJxaNJhIsmvX49h5Ck-MinFBI9wmB.jpg?r=f7d",
                 "ativo":false,
                 "dataCriacao":"2022-10-31",
                 "avaliacao":5
              },
              {
                 "filmeId":156,
                 "nome":"Yaksha: Operação Implacável",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaSPt2u3HKKn9npy5r5IsS86J25jW7OSbkx3noxpvPmw8qka3r3fm4vvcqfscykmRujqUuLQ6OA7ZWleNFRJRDlwEIAf_tKel8QdNSD93ic9zQVTUHM-TbJynNETaKaKcz5R.jpg?r=c95",
                 "ativo":true,
                 "dataCriacao":"2022-11-1",
                 "avaliacao":5
              },
              {
                 "filmeId":157,
                 "nome":"Abaixo de Zero",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbndgSqeBYMHSkBEGpKfiOoxDomBo2oi8XDYEIGV11LT8hMLJXne0hfSKG4x5xD4sW--Lpt84ovu2BH40vkrsgrR8-GRRUD1_3yLHhWIgH_Kqe2jsaoSr8q51k7XEsAuheAv.jpg?r=866",
                 "ativo":true,
                 "dataCriacao":"2022-11-2",
                 "avaliacao":5
              }
           ]
        },
        {
           "id":16,
           "genero":"Filmes policiais",
           "filmes":[
              {
                 "filmeId":158,
                 "nome":"Última Chance",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABerGv39V-Wnr_0QStJPjq-F-o2Nmy_NOBTdpvL8LJh_zCHunzEL5RaG-R7GNJbvjo_L8TX9lBWmzSMjJ9C1ao3W8Cs9x_5owrQQ.webp?r=cdc",
                 "ativo":true,
                 "dataCriacao":"2022-10-25",
                 "avaliacao":5
              },
              {
                 "filmeId":159,
                 "nome":"Vingança & Castigo",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaBdbsxRLx8pHIWhJHr-6tt8HOLdcWJ3ylAtXugv1TH8wfTd94lLhE-PxOJCAw9cjhnzwBpF3D2yuLpT9JI3jYtC3PoLM2_7awvTVQDQiOyKKrKCazug9VsGJ1QrfHWgdAod.jpg?r=e21",
                 "ativo":true,
                 "dataCriacao":"2022-10-26",
                 "avaliacao":5
              },
              {
                 "filmeId":160,
                 "nome":"O Profissional",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQ1GAABSvf3zSEvfFu_uTW3yoiONb0dSimqCiM_yT1cHXnTZ6bI4bHJi7LLseWs9pJyV_0mO735UDpYE-ofDpPze1XK9ysiqQWI.webp?r=3de",
                 "ativo":true,
                 "dataCriacao":"2022-10-27",
                 "avaliacao":5
              },
              {
                 "filmeId":161,
                 "nome":"Os Opostos Sempre Se Atraem",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABToWmKjSqvp-SrIvBqWPaZJlnoBUzd_6Hi51R2X12GzH8kn3aJMeQxVdD2bdGYlrFC6gOGao32PLXjpeGk9GbaPQi_5-W0NpBGf1_dsL0w4MQ7dQO_0ERk7Ecl-bACpdIBHl.jpg?r=6fb",
                 "ativo":true,
                 "dataCriacao":"2022-10-28",
                 "avaliacao":5
              },
              {
                 "filmeId":162,
                 "nome":"Em Ritmo de Fuga",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQK3ZMQxnMCbPpcDfPUVoL8H6VrTD7LKhjprCHGyDBeR4OxAuutnYzEHsUIscnLz2DuwKi8VoPB6t3lED9I0gwyqfT3j1AB4c44.webp?r=884",
                 "ativo":true,
                 "dataCriacao":"2022-10-29",
                 "avaliacao":5
              },
              {
                 "filmeId":163,
                 "nome":"Jack Reacher: Sem Retorno",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABd52Tp_LoNRGBHi-GgQl17-EH63GSaNWfCby3gMberNi0XRale_4gCZbXIkYbNELCZJdsVqdiAxucYBdkhGcl53AZsm2uWPNDho.webp?r=39e",
                 "ativo":false,
                 "dataCriacao":"2022-10-30",
                 "avaliacao":5
              },
              {
                 "filmeId":164,
                 "nome":"Minority Report: A Nova Lei",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcFSi5M8w0B_l-OnlhbwsVWIuro302tYrihIUiOsjnmmlw3biIAzcbZteBbc6gUCxFaWFMbC5sU9AJ-rydJjfuX624IPUnZqul8.webp?r=fee",
                 "ativo":true,
                 "dataCriacao":"2022-10-31",
                 "avaliacao":3
              },
              {
                 "filmeId":165,
                 "nome":"Rápida Vingança",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXU-d57Qmbr6FAW2r-EASmJk1_m0OpfoWS9UX-Do-Z_w_u_AcE3I6YnaMjdymlQ7ZuDLKRb0jvOXdB4R5iO264dV-WZ8M5eldtc.webp?r=771",
                 "ativo":true,
                 "dataCriacao":"2022-11-1",
                 "avaliacao":3
              },
              {
                 "filmeId":166,
                 "nome":"O Procurado",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTgkcdkuOc73cOYzRnVr5e9Z3P8ucmhkOrPzobbj99FHJdHWbD5RRtqYG6NaYNgTgIaaTMNkm9uJMJcxR2zw_7qJJbwZSt1Ox0M.webp?r=684",
                 "ativo":true,
                 "dataCriacao":"2022-11-2",
                 "avaliacao":5
              },
              {
                 "filmeId":167,
                 "nome":"Truque de Mestre: O Segundo Ato",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTusF-YeAUYnLoV5VrpoO45pBx9yFnbQq_W0bQwYZjuV5U5mkYLuluSAsBoh5FZKbBVCN_x5zGLkZv2M2Si4TxkQkJrf7-8M_lk.webp?r=88a",
                 "ativo":false,
                 "dataCriacao":"2022-12-4",
                 "avaliacao":5
              },
              {
                 "filmeId":168,
                 "nome":"Polar",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcRt6uf-Txk3Jw5BAMgemorUQECjinLUWgKlvn898nvGRRSEHwdb_hmuYxqwy0eEeSTMA_xTr7ckmtcOmNwWG0nP2Ytf13LJj0t9X34bQ2rSU108HazQZIUNU_80jODhpKTd.jpg?r=c77",
                 "ativo":false,
                 "dataCriacao":"2023-1-4",
                 "avaliacao":3
              },
              {
                 "filmeId":169,
                 "nome":"Seul em Alta Velocidade",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYbFcNSqu8cY0QF4iL23a6T6dW4WXlUv3W_QBqiF75okrYmY_yozWHnc_7_f3ibDLhK0uQQSvEBaDVS1Q7q6kX_5_dw5Rz2xQgxmK-D59ezghQx5jSFFFAt0Gdv-niO_xQ55.jpg?r=702",
                 "ativo":true,
                 "dataCriacao":"2023-2-5",
                 "avaliacao":5
              },
              {
                 "filmeId":170,
                 "nome":"Inimigos públicos",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZKeR7KjkNpKwmuREYn3q7fZM_hJJTsQKGedPVTSZOjr-XPb1cQchzAvh4N3xQHO6z4u9hqk9crhV7G9Ww1Dyb_7JQlrSgGeHAo.webp?r=d5b",
                 "ativo":false,
                 "dataCriacao":"2023-3-9",
                 "avaliacao":5
              },
              {
                 "filmeId":171,
                 "nome":"Rota de Fuga",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABY1sVWOYBePJzqbdewOIIHaQh1WuYrk01dgaMeQHl-buaVP2hSEXC1abeSM9zblFMAvAkrQK3yg1I7HbZdqmXNEOflw9qHunxKA.webp?r=852",
                 "ativo":true,
                 "dataCriacao":"2023-4-7",
                 "avaliacao":3
              },
              {
                 "filmeId":172,
                 "nome":"S.W.A.T.: Comando Especial 2",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABb2MjUR3dL3lLro0T6yECnD80ByeO9MHSpHjHFmPdy4gWPKF2XzT7WM-ebyAC9-B1yjb3V_qu5ROp6GZb_VzsHIFWIYpXbnihbE.webp?r=145",
                 "ativo":true,
                 "dataCriacao":"2023-5-9",
                 "avaliacao":5
              },
              {
                 "filmeId":173,
                 "nome":"Os Fora da Lei",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbvtLAj2Tdx7JXflNKg4TZncm20pqIVPJQmDsXZnC7qu27pnaXcetpAWQvZgzfR-rXyGK9ZtFER7uCn1fu7Ya7l-MLapRxPCh44.webp?r=5ca",
                 "ativo":true,
                 "dataCriacao":"2023-6-9",
                 "avaliacao":5
              },
              {
                 "filmeId":174,
                 "nome":"Chappie",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABajWbMgIRAQWXur_XM4mAnef8Kj3B8k8WZS5YWFvO6eht-TJNwTmgE6s7p20BUiamgHgnYJYnneEyRZRx46sGv9ze43Y3RFuHyM.webp?r=ec2",
                 "ativo":true,
                 "dataCriacao":"2023-7-11",
                 "avaliacao":5
              },
              {
                 "filmeId":175,
                 "nome":"Red - Aposentados e perigosos",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABffFxtoi0HcHAszMCianQaYp5omA-2h6vsJueNFG6urZkpzbJxxF29iy7KdH8O-_3nXz7lV4dXq4lZHg1RwGQB-Uj0MgwvRnoIY.webp?r=302",
                 "ativo":true,
                 "dataCriacao":"2023-8-11",
                 "avaliacao":3
              },
              {
                 "filmeId":176,
                 "nome":"Sicario: Terra de Ninguém",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSvL6c0_fYBa4mGBo_U3u-KtnlowD_ciOGT9Y7nOOc3wnsjJPCGEqGdAfgNOfvDAUZKZvrKKLWVGYXPNbtRuHJkFTR6rdSmpjco.webp?r=141",
                 "ativo":true,
                 "dataCriacao":"2023-9-12",
                 "avaliacao":5
              },
              {
                 "filmeId":177,
                 "nome":"O plano perfeito",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcMFoYplFCS630pIDmO9lRcvbRfI-yKpLuXpxlneuOhC2J2-5S0s0-KmeHiiKPT2vm4Q9laBL2UisfcU8VRUpP-9U4dXKg5E5OI.webp?r=90a",
                 "ativo":true,
                 "dataCriacao":"2023-10-14",
                 "avaliacao":5
              }
           ]
        },
        {
           "id":17,
           "genero":"Campeões de bilheteria",
           "filmes":[
              {
                 "filmeId":178,
                 "nome":"Corações de Ferro",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXja6_7sywMJeUY_vkdIC_gKsrihCKKC9OnPmQbX5E9swe3V3nuMuxU5z_VM50y9-B-V_2ypNz-KsOGRi4uTEf12G6oFvqQnAKc.webp?r=9f9",
                 "ativo":true,
                 "dataCriacao":"2022-10-25",
                 "avaliacao":5
              },
              {
                 "filmeId":179,
                 "nome":"Homem-Aranha",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWG-U_NqFTYPwRs5bVfjI_IGeyqGDr95w_UhF2J5i-6-dlnzu1lraQZEfFWl5n7jhZK2zu8SNgU3XR56wsOXvpp-Ra01bSQHqJ4.webp?r=89d",
                 "ativo":true,
                 "dataCriacao":"2022-10-26",
                 "avaliacao":5
              },
              {
                 "filmeId":180,
                 "nome":"Gladiador",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUvVjoor9IuWDdcvF-cJPEzWoPxghTpp22NhLwKBi553KyRV6km4Y4xIYjx95vU7O4AVplDpHypQj7ws9fSWnrjf3Rjus4CgcyM.webp?r=39a",
                 "ativo":true,
                 "dataCriacao":"2022-10-27",
                 "avaliacao":5
              },
              {
                 "filmeId":181,
                 "nome":"Transformers – A Vingança dos Derrotados",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABX8xB_kVjTO2vJ_HFm-2Ci1YBQ0c0SePkTOB1fkqI0QmERNQE8rrqSkJIV5-Y1IXrawDj3ZqffPa5pPmWCULYKDew8A7BhWCmS0.webp?r=4f9",
                 "ativo":false,
                 "dataCriacao":"2022-10-28",
                 "avaliacao":5
              },
              {
                 "filmeId":182,
                 "nome":"Transformers - A Era da Extinção",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXZW3h_66Q2V55CKZCqQ_JBIcrFDjYgt_xgurHmp3Ap5SSpDH0TZLri13RFH9Jkg0br66a26g1rM9CbRxHXcrbN2EW48jUunQSQ.webp?r=56c",
                 "ativo":false,
                 "dataCriacao":"2022-10-29",
                 "avaliacao":5
              },
              {
                 "filmeId":183,
                 "nome":"Motoqueiro Fantasma – Espírito de Vingança",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbcmXXoZDDY5PJVtNkbCiXjoIOsuLa9LixJWVCL4_TmlTTiOGjcv10E6Iv7Js8P2ibmSHGlmw8B1YILwBlmjoRiIpuZL7TrphCg.webp?r=927",
                 "ativo":true,
                 "dataCriacao":"2022-10-30",
                 "avaliacao":3
              },
              {
                 "filmeId":184,
                 "nome":"Lara Croft - Tomb Raider: A origem da vida",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXtESjLVB6YnjeBs-Ro8vYaDCNOG2drMBVpj-6zxzuZtIHdHTabNmXXOQtOSMck071oDm2EWcy4SadMGt38EJUtt7tbs82AaXbw.webp?r=67e",
                 "ativo":true,
                 "dataCriacao":"2022-10-31",
                 "avaliacao":5
              },
              {
                 "filmeId":185,
                 "nome":"Branca de Neve e o Caçador",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTwY62j-ZfYCGW4uz-PQ4gWW6VxRLQYwD2gEVcmdrm2QeD13WStE01-gR0begkf8fr1IPZ5z9d14TordAoSo5khw2eEFhGO4H1I.webp?r=32d",
                 "ativo":true,
                 "dataCriacao":"2022-11-1",
                 "avaliacao":5
              },
              {
                 "filmeId":186,
                 "nome":"O escorpião rei",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdTOQco1TEq3Qhbn3o1_vh4cw0912AReEfudSnBXRSP-3gR4aKst3R1fLALdJyJR-CXrpesf1vSMCLrwSavLThAPhdNRMdK4z9E.webp?r=ac6",
                 "ativo":true,
                 "dataCriacao":"2022-11-2",
                 "avaliacao":5
              }
           ]
        },
        {
           "id":18,
           "genero":"Minha lista",
           "filmes":[
              {
                 "filmeId":187,
                 "nome":"A Lenda de Tarzan",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXUTxm9oZ6ZbJMaIEg-p76tjNLVdUMvIaUvcDggb_miFgCd8nd9qqmKt8_WMJkfFacPxE656WQPbdsaqLCnMAua_cDhoUgpQiXU.webp?r=019",
                 "ativo":true,
                 "dataCriacao":"2022-10-25",
                 "avaliacao":4
              },
              {
                 "filmeId":188,
                 "nome":"Extinção",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABV6ATliDFdPdRqqD1QwYLFFomvIXgfBC-ClrslFL3MKkQDhdYcBalxE5-sqfAUlbZAPritffwyxdx3h7H-KbwtpxSaiSijaxxkjkr9xviqtQFVophLBbK12ze6UR9FiOaE4Z.jpg?r=e1c",
                 "ativo":true,
                 "dataCriacao":"2022-10-26",
                 "avaliacao":4
              },
              {
                 "filmeId":189,
                 "nome":"Ascensão do Cisne Negro",
                 "classificacaoIndicativa":16,
                 "image":"<img src=https://occ-0-759-1567.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWecLYgNfTMqLA6JV3gMSoIbASmDrEUF0072N1iLr0gAqYZATFgMXWloL061QoF_TF8AtgKktYT8PftLVvHk3QgR9cRc8WbwUrHRKHkWyjgXgshVQx5hULa57uqEnDH1gfUx.jpg?r=786",
                 "ativo":true,
                 "dataCriacao":"2022-10-27",
                 "avaliacao":4
              }
           ]
        }
     ];

     return generos;
}