/**
 * Created by bll on 14/1/16.
 */
/**
 * Created by bll on 14/1/16.
 */

'use strict';

module.exports = {
    db: {
        mysql: {
            host: process.env.MYSQL_HOST || 'localhost',
            port: process.env.MYSQL_PORT ||  3306,
            database: process.env.MYSQL_DB || 'roomied_configuration_dev',
            user: process.env.MYSQL_USER || 'root',
            password: process.env.MYSQL_PASSWORD || 'jabong'
        },
        redis: {
            host: process.env.REDIS_HOST || '127.0.0.1',
            port: process.env.REDIS_PORT ||  6379,
            database: process.env.REDIS_DB || '',
            password: process.env.REDIS_PASSWORD || '',
            partition: process.env.REDIS_PARTITION || ''
        }
    },
    port: 3001,
    log: {
        // Can specify one of 'combined', 'common', 'dev', 'short', 'tiny'
        format: 'dev',
        // Stream defaults to process.stdout
        // Uncomment to enable logging to a log on the file system
        options: {
            //console: '*'
            //stream: 'access.log'
        }
    },
    app: {
        title: 'Roomied - Test Environment'
    },
    facebook: {
        clientID: process.env.FACEBOOK_ID || '1093951753957423',
        clientSecret: process.env.FACEBOOK_SECRET || '7813f28c056a037d662de813e8d14e6c',
        callbackURL: '/auth/facebook/callback'
    },
    /* Will Add it later
     twitter: {
     clientID: process.env.TWITTER_KEY || 'CONSUMER_KEY',
     clientSecret: process.env.TWITTER_SECRET || 'CONSUMER_SECRET',
     callbackURL: '/auth/twitter/callback'
     },
     */
    google: {
        clientID: process.env.GOOGLE_ID || 'APP_ID',
        clientSecret: process.env.GOOGLE_SECRET || 'APP_SECRET',
        callbackURL: '/auth/google/callback'
    },

    /*Will Add It Later
     linkedin: {
     clientID: process.env.LINKEDIN_ID || 'APP_ID',
     clientSecret: process.env.LINKEDIN_SECRET || 'APP_SECRET',
     callbackURL: '/auth/linkedin/callback'
     },
     github: {
     clientID: process.env.GITHUB_ID || 'APP_ID',
     clientSecret: process.env.GITHUB_SECRET || 'APP_SECRET',
     callbackURL: '/auth/github/callback'
     },
     */
    mailer: {
        from: process.env.MAILER_FROM || 'MAILER_FROM',
        options: {
            service: process.env.MAILER_SERVICE_PROVIDER || 'MAILER_SERVICE_PROVIDER',
            auth: {
                user: process.env.MAILER_EMAIL_ID || 'MAILER_EMAIL_ID',
                pass: process.env.MAILER_PASSWORD || 'MAILER_PASSWORD'
            }
        }
    }
};