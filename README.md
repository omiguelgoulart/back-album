# Padrão de Commits

## Formato

```
:gitmoji: <tipo>(<escopo>): <descrição curta>
```

## Tipos e Gitmojis

| Gitmoji                    | Tipo       | Quando usar                          |
|----------------------------|------------|--------------------------------------|
| ✨ `:sparkles:`            | `feat`     | Nova funcionalidade                  |
| 🐛 `:bug:`                 | `fix`      | Correção de bug                      |
| ♻️ `:recycle:`             | `refactor` | Refatoração sem mudar comportamento  |
| 💄 `:lipstick:`            | `style`    | Formatação, sem alteração de lógica  |
| 🔧 `:wrench:`              | `chore`    | Configuração, scripts, dependências  |
| 📝 `:memo:`                | `docs`     | Documentação                         |
| ✅ `:white_check_mark:`    | `test`     | Adição ou correção de testes         |
| 🔒 `:lock:`                | `security` | Correção de vulnerabilidade          |
| 🗑️ `:wastebasket:`         | `remove`   | Remoção de código ou arquivos        |
| 🚀 `:rocket:`              | `perf`     | Melhoria de performance              |
| 🎉 `:tada:`                | `init`     | Commit inicial                       |

## Escopos comuns

`auth` · `users` · `transactions` · `categories` · `accounts` · `prisma` · `config`

## Exemplos

```
:sparkles: feat(auth): adicionar login com JWT
:bug: fix(users): corrigir erro 500 ao criar usuário
:recycle: refactor(auth): padronizar campo senha para password
:wrench: chore(prisma): adicionar coluna password na migration
:white_check_mark: test(users): adicionar testes de criação de usuário
```
# back-album
