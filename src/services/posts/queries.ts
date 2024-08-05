const queries = {
  /* CRUD ------------------------------------------------------------------ */

  createOne: `
    INSERT INTO public.posts (
        title, slug, abstract, body, significance, published_at, tags
    ) VALUES (
        $1, $2, $3, $4, $5, $6, $7
    ) RETURNING id;
  `,

  readOne: `
    SELECT * FROM public.posts p
    WHERE p.id = $1;
  `,

  updateOne: `
    UPDATE public.posts
    SET title = $2,
        slug = $3,
        abstract = $4,
        body = $5,
        significance = $6,
        published_at = $7,
        tags = $8,
        updated_at = NOW()
    WHERE id = $1
    RETURNING *;
  `,

  deleteOne: `
    DELETE from public.posts
    WHERE id = $1;
  `,

  /* OTHER ----------------------------------------------------------------- */

  readLatest: `
    SELECT * FROM public.posts p
    ORDER BY p.created_at DESC
    LIMIT 10
    OFFSET 0;
  `,

  readAll: `
    SELECT * FROM public.posts
    ORDER BY p.created_at DESC;
  `,

  readAllInYear: `
    SELECT * FROM public.posts p
    WHERE
        DATE_PART('year', p.created_at) = $1
    ORDER BY p.created_at DESC;
  `,

  readAllInMonth: `
    SELECT * FROM public.posts p
    WHERE
        DATE_PART('year', p.created_at) = $1
        AND DATE_PART('month', p.created_at) = $2
    ORDER BY p.created_at DESC;
  `,

  readAllInDay: `
    SELECT * FROM public.posts p
    WHERE
        DATE_PART('year', p.created_at) = $1
        AND DATE_PART('month', p.created_at) = $2
        AND DATE_PART('day', p.created_at) = $3
    ORDER BY p.created_at DESC;
  `,

  readYears: `
    SELECT 
        DISTINCT DATE_PART('year', p.created_at) as year
    FROM public.posts p
    ORDER BY year DESC;
  `,

  readMonths: `
    SELECT 
        DISTINCT DATE_PART('month', p.created_at) as month,
        DATE_PART('year', p.created_at) as year
    FROM public.posts p
    WHERE 
        DATE_PART('year', p.created_at) = $1
    ORDER BY month DESC;
  `,

  readDays: `
    SELECT
        DISTINCT DATE_PART('day', p.created_at) as day,
        DATE_PART('month', p.created_at) as month,
        DATE_PART('year', p.created_at) as year
    FROM public.posts p
    WHERE 
        DATE_PART('year', p.created_at) = $1
        AND DATE_PART('month', p.created_at) = $2
    ORDER BY day DESC;
  `,
}

export default queries
