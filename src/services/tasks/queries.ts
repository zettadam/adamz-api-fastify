const queries = {
  /* CRUD ------------------------------------------------------------------ */

  createOne: `
    INSERT INTO public.tasks (
        title, description, tags
    ) VALUES (
        $1, $2, $3
    ) RETURNING id;
  `,

  readOne: `
    SELECT * FROM public.tasks t
    WHERE t.id = $1;
  `,

  updateOne: `
    UPDATE public.tasks
    SET title = $2, 
        description = $3,
        tags = $4,
        updated_at = NOW()
    WHERE id = $1
    RETURNING *;
  `,

  deleteOne: `
    DELETE from public.tasks
    WHERE id = $1;
  `,

  /* OTHER ----------------------------------------------------------------- */

  readLatest: `
    SELECT * FROM public.tasks t
    ORDER BY t.created_at DESC
    LIMIT 10
    OFFSET 0;
  `,

  readAll: `
    SELECT * FROM public.tasks t
    ORDER BY t.created_at DESC;
  `,

  readAllInYear: `
    SELECT * FROM public.tasks t
    WHERE
        DATE_PART('year', t.created_at) = $1
    ORDER BY t.created_at DESC;
  `,

  readAllInMonth: `
    SELECT * FROM public.tasks t
    WHERE
        DATE_PART('year', t.created_at) = $1
        AND DATE_PART('month', t.created_at) = $2
    ORDER BY t.created_at DESC;
  `,

  readAllInDay: `
    SELECT * FROM public.tasks t
    WHERE
        DATE_PART('year', t.created_at) = $1
        AND DATE_PART('month', t.created_at) = $2
        AND DATE_PART('day', t.created_at) = $3
    ORDER BY t.created_at DESC;
  `,

  readYears: `
    SELECT 
        DISTINCT DATE_PART('year', t.created_at) as year
    FROM public.tasks t
    ORDER BY year DESC;
  `,

  readMonths: `
    SELECT 
        DISTINCT DATE_PART('month', t.created_at) as month,
        DATE_PART('year', t.created_at) as year
    FROM public.tasks t 
    WHERE 
        DATE_PART('year', t.created_at) = $1
    ORDER BY month DESC;
  `,

  readDays: `
    SELECT
        DISTINCT DATE_PART('day', t.created_at) as day,
        DATE_PART('month', t.created_at) as month,
        DATE_PART('year', t.created_at) as year
    FROM public.tasks t 
    WHERE 
        DATE_PART('year', t.created_at) = $1
        AND DATE_PART('month', t.created_at) = $2
    ORDER BY day DESC;
  `,
}

export default queries
