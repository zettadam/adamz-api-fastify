const queries = {
  /* CRUD ------------------------------------------------------------------ */

  createOne: `
    INSERT INTO public.code_snippets (
        title, body, language, published_at
    ) VALUES (
        $1, $2, $3, $4
    ) RETURNING id;
  `,

  readOne: `
    SELECT * FROM public.code_snippets c
    WHERE c.id = $1;
  `,

  updateOne: `
    UPDATE public.code_snippets
    SET title = $2,
        body = $3,
        language = $4,
        published_at = $5,
        updated_at = NOW()
    WHERE id = $1
    RETURNING *;
  `,

  deleteOne: `
    DELETE from public.code_snippets
    WHERE id = $1;
  `,

  /* OTHER ----------------------------------------------------------------- */

  readLatest: `
    SELECT * FROM public.code_snippets c
    ORDER BY c.created_at DESC
    LIMIT 10
    OFFSET 0;
  `,

  readAll: `
    SELECT * FROM public.code_snippets c
    ORDER BY c.created_at DESC;
  `,

  readAllInYear: `
    SELECT * FROM public.code_snippets c
    WHERE
        DATE_PART('year', c.created_at) = $1
    ORDER BY c.created_at DESC;
  `,

  readAllInMonth: `
    SELECT * FROM public.code_snippets c
    WHERE
        DATE_PART('year', c.created_at) = $1
        AND DATE_PART('month', c.created_at) = $2
    ORDER BY c.created_at DESC;
  `,

  readAllInDay: `
    SELECT * FROM public.code_snippets c
    WHERE
        DATE_PART('year', c.created_at) = $1
        AND DATE_PART('month', c.created_at) = $2
        AND DATE_PART('day', c.created_at) = $3
    ORDER BY c.created_at DESC;
  `,

  readYears: `
    SELECT 
        DISTINCT DATE_PART('year', c.created_at) as year
    FROM public.code_snippets c
    ORDER BY year DESC;
  `,

  readMonths: `
    SELECT 
        DISTINCT DATE_PART('month', c.created_at) as month,
        DATE_PART('year', c.created_at) as year
    FROM public.code_snippets c
    WHERE 
        DATE_PART('year', c.created_at) = $1
    ORDER BY month DESC;
  `,

  readDays: `
    SELECT
        DISTINCT DATE_PART('day', c.created_at) as day,
        DATE_PART('month', c.created_at) as month,
        DATE_PART('year', c.created_at) as year
    FROM public.code_snippets c
    WHERE 
        DATE_PART('year', c.created_at) = $1
        AND DATE_PART('month', c.created_at) = $2
    ORDER BY day DESC;
  `,
}

export default queries
