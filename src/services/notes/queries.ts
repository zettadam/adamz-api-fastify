const queries = {
  /* CRUD ------------------------------------------------------------------ */

  createOne: `
    INSERT INTO public.notes (
        title, slug, body, significance, published_at
    ) VALUES (
        $1, $2, $3, $4, $5, $6
    ) RETURNING id;
  `,

  readOne: `
    SELECT * FROM public.notes n
    WHERE n.id = $1;
  `,

  updateOne: `
    UPDATE public.notes
    SET title = $2,
        slug = $3,
        body = $4,
        significance = $5,
        published_at = $6,
        updated_at = NOW()
    WHERE id = $1
    RETURNING *;
  `,

  deleteOne: `
    DELETE from public.notes
    WHERE id = $1;
  `,

  /* OTHER ----------------------------------------------------------------- */

  readLatest: `
    SELECT * FROM public.notes n
    ORDER BY n.created_at DESC
    LIMIT 10
    OFFSET 0;
  `,

  readAll: `
    SELECT * FROM public.notes n
    ORDER BY n.created_at DESC;
  `,

  readAllInYear: `
    SELECT * FROM public.notes n
    WHERE
        DATE_PART('year', n.created_at) = $1
    ORDER BY n.created_at DESC;
  `,

  readAllInMonth: `
    SELECT * FROM public.notes n
    WHERE
        DATE_PART('year', n.created_at) = $1
        AND DATE_PART('month', n.created_at) = $2
    ORDER BY n.created_at DESC;
  `,

  readAllInDay: `
    SELECT * FROM public.notes n
    WHERE
        DATE_PART('year', n.created_at) = $1
        AND DATE_PART('month', n.created_at) = $2
        AND DATE_PART('day', n.created_at) = $3
    ORDER BY n.created_at DESC;
  `,

  readYears: `
    SELECT 
        DISTINCT DATE_PART('year', n.created_at) as year
    FROM public.notes n
    ORDER BY year DESC;
  `,

  readMonths: `
    SELECT 
        DISTINCT DATE_PART('month', n.created_at) as month,
        DATE_PART('year', n.created_at) as year
    FROM public.notes n
    WHERE 
        DATE_PART('year', n.created_at) = $1
    ORDER BY month DESC;
  `,

  readDays: `
    SELECT
        DISTINCT DATE_PART('day', n.created_at) as day,
        DATE_PART('month', n.created_at) as month,
        DATE_PART('year', n.created_at) as year
    FROM public.notes n
    WHERE 
        DATE_PART('year', n.created_at) = $1
        AND DATE_PART('month', n.created_at) = $2
    ORDER BY day DESC;
  `,
}

export default queries
