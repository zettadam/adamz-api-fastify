const queries = {
  /* CRUD ------------------------------------------------------------------ */

  createOne: `
    INSERT INTO public.links (
        url, title, description
    ) VALUES (
        $1, $2, $3
    ) RETURNING id;
  `,

  readOne: `
    SELECT * FROM public.links l
    WHERE l.id = $1;
  `,

  updateOne: `
    UPDATE public.links
    SET url = $2,
        title = $3,
        description = $4,
        updated_at = NOW()
    WHERE id = $1
    RETURNING *;
  `,

  deleteOne: `
    DELETE from public.links
    WHERE id = $1;
  `,

  /* OTHER ----------------------------------------------------------------- */

  readLatest: `
    SELECT * FROM public.links l
    ORDER BY l.created_at DESC
    LIMIT 10
    OFFSET 0;
  `,

  readAll: `
    SELECT * FROM public.links l
    ORDER BY l.created_at DESC;
  `,

  readAllInYear: `
    SELECT * FROM public.links l
    WHERE
        DATE_PART('year', l.created_at) = $1
    ORDER BY l.created_at DESC;
  `,

  readAllInMonth: `
    SELECT * FROM public.links l
    WHERE
        DATE_PART('year', l.created_at) = $1
        AND DATE_PART('month', l.created_at) = $2
    ORDER BY l.created_at DESC;
  `,

  readAllInDay: `
    SELECT * FROM public.links l
    WHERE
        DATE_PART('year', l.created_at) = $1
        AND DATE_PART('month', l.created_at) = $2
        AND DATE_PART('day', l.created_at) = $3
    ORDER BY l.created_at DESC;
  `,

  readYears: `
    SELECT 
        DISTINCT DATE_PART('year', l.created_at) as year
    FROM public.links l
    ORDER BY year DESC;
  `,

  readMonths: `
    SELECT 
        DISTINCT DATE_PART('month', l.created_at) as month,
        DATE_PART('year', l.created_at) as year
    FROM public.links l
    WHERE 
        DATE_PART('year', l.created_at) = $1
    ORDER BY month DESC;
  `,

  readDays: `
    SELECT
        DISTINCT DATE_PART('day', l.created_at) as day,
        DATE_PART('month', l.created_at) as month,
        DATE_PART('year', l.created_at) as year
    FROM public.links l
    WHERE 
        DATE_PART('year', l.created_at) = $1
        AND DATE_PART('month', l.created_at) = $2
    ORDER BY day DESC;
  `,
}

export default queries
