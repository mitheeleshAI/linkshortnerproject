CREATE TABLE IF NOT EXISTS links (
	id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	short_code VARCHAR(10) NOT NULL UNIQUE,
	destination TEXT NOT NULL,
	clerk_user_id VARCHAR(255) NOT NULL,
	created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
	updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_links_short_code ON links(short_code);
CREATE INDEX IF NOT EXISTS idx_links_clerk_user_id ON links(clerk_user_id);
