"redis.call('SET', KEYS[1], ARGV[1]);redis.call('SET', KEYS[1] .. 'coucou', ARGV[1]);return redis.call('SET', KEYS[1] .. 'titi', ARGV[1]);"
