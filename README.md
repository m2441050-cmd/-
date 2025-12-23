# -

## デプロイについて 🚀
このリポジトリは Vercel にデプロイ可能です。自動デプロイは `main` ブランチへの push でトリガーされます（GitHub Actions ワークフローは `.github/workflows/deploy.yml`）。

必要な GitHub Secrets:
- `VERCEL_TOKEN` (Vercel Personal Token)
- `OPENAI_API_KEY`
- `SMTP_HOST`
- `SMTP_USER`
- `SMTP_PASS`
- `MAIL_FROM`

> 注: 現在、私が GitHub Secrets を直接登録しようとしましたが、権限不足のため失敗しました（HTTP 403）。下記のどちらかをお願いします:
> 1. Vercel トークン（`VERCEL_TOKEN`）をここに安全に貼る（非推奨）か、
> 2. リポジトリの Settings → Secrets → Actions から `VERCEL_TOKEN` を追加するか、
> 3. このリポジトリで私（自動化エージェント）がシークレットを設定できるように権限を付与する。

Push to `main` will trigger an automatic build and deploy to Vercel once the secrets are configured.
