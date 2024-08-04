const queries = {
  /* CRUD ------------------------------------------------------------------ */

  createOne: `
    INSERT INTO public.events (
        title, description, start_time, end_time
    ) VALUES (
        $1, $2, $3, $4
    ) RETURNING id;
  `,

  readOne: `
    SELECT * FROM public.events e
    WHERE e.id = $1;
  `,

  updateOne: `
    UPDATE public.events
    SET title = $2,
        description = $3,
        start_time = $4,
        end_time = $5,
        updated_at = NOW()
    WHERE id = $1
    RETURNING *;
  `,

  deleteOne: `
    DELETE from public.events
    WHERE id = $1;
  `,

  /* OTHER ----------------------------------------------------------------- */

  readLatest: `
    SELECT * FROM public.events e
    ORDER BY e.created_at DESC
    LIMIT 10
    OFFSET 0;
  `,

  readAll: `
    SELECT * FROM public.events e
    ORDER BY e.created_at DESC;
  `,

  readAllInYear: `
    SELECT * FROM public.events e
    WHERE
        DATE_PART('year', e.created_at) = $1
    ORDER BY e.created_at DESC;
  `,

  readAllInMonth: `
    SELECT * FROM public.events e
    WHERE
        DATE_PART('year', e.created_at) = $1
        AND DATE_PART('month', e.created_at) = $2
    ORDER BY e.created_at DESC;
  `,

  readAllInDay: `
    SELECT * FROM public.events e
    WHERE
        DATE_PART('year', e.created_at) = $1
        AND DATE_PART('month', e.created_at) = $2
        AND DATE_PART('day', e.created_at) = $3
    ORDER BY e.created_at DESC;
  `,

  readYears: `
    SELECT 
        DISTINCT DATE_PART('year', e.created_at) as year
    FROM public.events e
    ORDER BY year DESC;
  `,

  readMonths: `
    SELECT 
        DISTINCT DATE_PART('month', e.created_at) as month,
        DATE_PART('year', e.created_at) as year
    FROM public.events e
    WHERE 
        DATE_PART('year', e.created_at) = $1
    ORDER BY month DESC;
  `,

  readDays: `
    SELECT
        DISTINCT DATE_PART('day', e.created_at) as day,
        DATE_PART('month', e.created_at) as month,
        DATE_PART('year', e.created_at) as year
    FROM public.events e
    WHERE 
        DATE_PART('year', e.created_at) = $1
        AND DATE_PART('month', e.created_at) = $2
    ORDER BY day DESC;
  `,
}

export default queries
