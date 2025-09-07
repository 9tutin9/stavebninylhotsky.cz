## Supabase – rychlý start

1) Vytvořte projekt na supabase.com
- Project Name libovolný, Region EU
- Uložte si Project URL a anon public key (Settings → API)

2) Naimportujte schéma
- Otevřete SQL Editor → New query
- Vložte obsah souboru `supabase_schema.sql` a spusťte Run

3) Storage pro obrázky (volitelné)
- Storage → Create new bucket `product-images` (public)
- Uploadujte obrázky; URL vložte do pole `image_url`

4) Bezpečnost
- RLS je zapnuto; čtení je povoleno jen pro `is_active = true`
- Zápis (insert/update/delete) je povolen pro `authenticated`

5) Přihlášení do administrace
- Pro rychlý start je v `admin.html` jednoduché heslo přes prompt (lokální)
- Doporučeno nahradit za Supabase Auth (magic link)

6) Propojení webu
- Do `config.js` vložte své `SUPABASE_URL` a `SUPABASE_ANON_KEY`
- Otevřete `admin.html` pro správu produktů a kategorií
- `cenik.html` už čte data z tabulky `products`

Tip: Pro hromadné importy lze použít Table Editor → Import CSV.


